/*

TODO:

- [X] Both - Order the pages by the order they appear in the book
- [X] Both - Change detection not working (thinks it's new each time)
- [X] LGMRD - Monster templates (has two-column tables)
- [ ] LGMRD - Random items / Potions of healing - has table rows with ranges
- [ ] LGMMBRD - General purpose statblocks
- [ ] LGMMBRD - Monsters by Adventure Location has broken tables (also for regular markdown)

*/

import fs from "fs";
import path from "path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkStringify from "remark-stringify";
import {
  Heading,
  InlineCode,
  List,
  Node,
  Parent,
  Root,
  RootContent,
  Strong,
  TableCell,
  TableRow,
  Text,
} from "mdast";
import { toString } from "mdast-util-to-string";
import { visit, EXIT } from "unist-util-visit";
import { visitParents } from "unist-util-visit-parents";
import slugify from "slugify";

import {
  DocType,
  MARKDOWN_SEPARATE_PATHS,
  MARKDOWN_OBSIDIAN_PATHS,
} from "../utils/constants.js";
import {
  getMarkdownFiles,
  getAndDeletePreviousMarkdown,
} from "../utils/markdown.js";

function updateRollableTable(
  node: Parent,
  ancestors: Parent[],
  tableIds: Set<string>
): string {
  // Look through previous siblings to get the first heading
  let heading: Node | undefined;
  const highestAncestor = ancestors[ancestors.length - 1];
  visit(highestAncestor, "heading", (headingNode) => {
    if (
      (headingNode.position?.end.offset ?? 0) <
      (node.position?.start.offset ?? 0)
    ) {
      heading = headingNode;
    } else {
      return EXIT;
    }
  });

  let tableId = "";
  if (!heading) {
    tableId = "table";
  } else {
    tableId = slugify.default(toString(heading), {
      lower: true,
      strict: true,
    });
  }

  let tableIncrement = 1;
  const baseTableId = tableId;
  while (tableIds.has(tableId)) {
    tableId = baseTableId + tableIncrement;
    tableIncrement++;
  }

  tableIds.add(tableId);

  const indexOfSelf = ancestors[0].children.indexOf(node as RootContent);
  ancestors[0].children.splice(indexOfSelf + 1, 0, {
    type: "paragraph",
    children: [
      {
        type: "text",
        value: `^${tableId}`,
      },
    ],
  });

  return tableId;
}

export async function convertToMarkdownObsidian(
  docType: DocType,
  html: string
): Promise<boolean> {
  process.stdout.write(`Converting ${docType} to Markdown (Obsidian)...`);

  const previousMarkdown = getAndDeletePreviousMarkdown(
    MARKDOWN_OBSIDIAN_PATHS[docType]
  );

  const separateMarkdownFiles = getMarkdownFiles(
    MARKDOWN_SEPARATE_PATHS[docType]
  );

  let newMarkdown = "";
  const titleMap = new Map<string, string>();
  const obsidianMarkdownFiles: string[] = [];

  // First pass over files to get titles
  for (const file of separateMarkdownFiles) {
    const markdownFileContent = fs.readFileSync(file, "utf8");

    const oldTitle = path.basename(file, ".md");
    let title = oldTitle;
    let chapter = oldTitle.split("-")[0];
    const titleFinderPlugin = () => {
      return (tree: Root) => {
        visit(tree, "heading", (node) => {
          if (node.depth === 1) {
            title = chapter + " - " + toString(node);
            return EXIT;
          }
        });
      };
    };

    const data = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(titleFinderPlugin)
      .use(remarkStringify)
      .process(markdownFileContent);

    titleMap.set(oldTitle, title);

    const markdownFilePath = path.join(
      MARKDOWN_OBSIDIAN_PATHS[docType],
      `${title}.md`
    );
    fs.writeFileSync(markdownFilePath, data.toString());
    obsidianMarkdownFiles.push(markdownFilePath);
  }

  // Second pass over files to update links and process tables/ordered lists
  for (const file of obsidianMarkdownFiles) {
    const tableIds = new Set<string>();
    const markdownFileContent = fs.readFileSync(file, "utf8");

    const linkUpdaterPlugin = () => {
      return (tree: Root) => {
        visit(tree, "link", (node) => {
          const link = node.url as string;
          if (link.startsWith("http")) {
            return;
          }

          const oldTitle = path.basename(link, ".md");
          const newTitle = titleMap.get(oldTitle);
          if (newTitle) {
            node.url = newTitle + ".md";
          }
        });
      };
    };

    const addRollingToTablePlugin = () => {
      return (tree: Root) => {
        const diceRolls: {
          diceRoll: string;
          parent: Parent;
          table: Parent;
          headings: string[];
        }[] = [];

        visitParents(tree, "table", (node: Parent, ancestors: Parent[]) => {
          const headingRow = node.children[0] as TableRow;
          const headings = headingRow.children.map((cell) =>
            toString(cell as TableCell)
          );
          const cell0 = headings.shift(); // Remove the dice roll column

          if (!cell0?.match(/^\d*d[0-9]+$/)) {
            // Not a dice roll column
            return;
          }

          const tableId = updateRollableTable(node, ancestors, tableIds);
          const diceRoll = `dice: [[${path.basename(
            file,
            ".md"
          )}#^${tableId}]]`;

          diceRolls.push({
            diceRoll,
            parent: ancestors[0],
            table: node,
            headings,
          });
        });

        for (const { diceRoll, parent, table, headings } of diceRolls) {
          const indexOfSelf = parent.children.indexOf(table as RootContent);

          const paragraphChildren: (Text | InlineCode | Strong)[] = [];
          for (let i = 0; i < headings.length; i++) {
            paragraphChildren.push({
              type: "strong",
              children: [
                {
                  type: "text",
                  value: `${headings[i]}: `,
                },
              ],
            });
            paragraphChildren.push({
              type: "inlineCode",
              value: `${diceRoll}|${headings[i]}`,
            });
            if (i < headings.length - 1) {
              paragraphChildren.push({
                type: "text",
                value: "  \n",
              });
            }
          }

          parent.children.splice(indexOfSelf, 0, {
            type: "paragraph",
            children: paragraphChildren,
          });
        }
      };
    };

    const addRollingToListPlugin = () => {
      return (tree: Root) => {
        const diceRolls: {
          diceRoll: string;
          parent: Parent;
          list: Parent;
        }[] = [];

        visitParents(tree, "list", (node: Parent, ancestors: Parent[]) => {
          if (!(node as List).ordered) return;

          const tableId = updateRollableTable(node, ancestors, tableIds);
          const diceRoll = `dice: [[${path.basename(
            file,
            ".md"
          )}#^${tableId}]]`;

          diceRolls.push({ diceRoll, parent: ancestors[0], list: node });
        });

        for (const { diceRoll, parent, list } of diceRolls) {
          const indexOfSelf = parent.children.indexOf(list as RootContent);
          parent.children.splice(indexOfSelf, 0, {
            type: "paragraph",
            children: [
              {
                type: "inlineCode",
                value: diceRoll,
              },
            ],
          });
        }
      };
    };

    const removeH1Plugin = () => {
      return (tree: Root) => {
        visitParents(tree, "heading", (node: Heading, ancestors: Parent[]) => {
          if (node.depth === 1) {
            const indexOfSelf = ancestors[0].children.indexOf(node);
            ancestors[0].children.splice(indexOfSelf, 1);
          }
        });
      };
    };

    const data = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(linkUpdaterPlugin)
      .use(addRollingToTablePlugin)
      .use(addRollingToListPlugin)
      .use(removeH1Plugin)
      .use(remarkStringify)
      .process(markdownFileContent);

    const content = data.toString().replace(/&#x20;/g, " ");
    fs.writeFileSync(file, content);
    newMarkdown += "\n" + content;
  }

  process.stdout.write("Done\n");

  return previousMarkdown !== newMarkdown;
}
