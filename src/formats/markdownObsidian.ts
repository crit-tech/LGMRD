import fs from "fs";
import path from "path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkStringify from "remark-stringify";
import { Root } from "mdast";
import { toString } from "mdast-util-to-string";
import { visit, EXIT } from "unist-util-visit";

import {
  DocType,
  MARKDOWN_SEPARATE_PATHS,
  MARKDOWN_OBSIDIAN_PATHS,
} from "../utils/constants.js";
import {
  getMarkdownFiles,
  getAndDeletePreviousMarkdown,
} from "../utils/markdown.js";

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
  for (const file of separateMarkdownFiles) {
    const markdownFileContent = fs.readFileSync(file, "utf8");

    let title = path.basename(file, ".md");
    const titleFinderPlugin = () => {
      return (tree: Root) => {
        visit(tree, "heading", (node) => {
          if (node.depth === 1) {
            title = toString(node);
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

    const markdownFilePath = path.join(
      MARKDOWN_OBSIDIAN_PATHS[docType],
      `${title}.md`
    );
    fs.writeFileSync(markdownFilePath, data.toString());

    newMarkdown += "\n" + data.toString();
  }

  return previousMarkdown !== newMarkdown;
}
