import fs from "fs";
import path from "path";
import {
  Heading as MarkdownHeading,
  List,
  Paragraph,
  Root,
  Table,
} from "mdast";
import { toMarkdown } from "mdast-util-to-markdown";
import { fromMarkdown } from "mdast-util-from-markdown";
import { gfmFromMarkdown, gfmToMarkdown } from "mdast-util-gfm";
import { gfm } from "micromark-extension-gfm";
import { toString as mdastToString } from "mdast-util-to-string";
import { Node } from "unist";
import slugify from "slugify";
import semver from "semver";
import * as prettier from "prettier";

import {
  OUTPUT_PATH,
  MARKDOWN_SEPARATE_PATHS,
  DocType,
} from "../utils/constants.js";

const NEW_MAJOR_VERSIONS: Record<DocType, string> = {
  LGMRD: "3.0.0",
  "5e_Monster_Builder": "2.0.0",
};

interface SubSectionBase {
  type: "paragraph" | "table";
  order: number;
}

interface SubSectionMarkdown extends SubSectionBase {
  type: "paragraph";
  markdown?: string;
}

type TableRow = Record<string, string | number>;

interface SubSectionTable extends SubSectionBase {
  type: "table";
  table?: (string | number)[][];
  headers?: Record<string, string>;
  data?: TableRow[];
}

interface SubSection {
  id: string;
  title: string;
  order: number;
  content: (SubSectionMarkdown | SubSectionTable)[];
}

interface Section {
  id: string;
  title: string;
  intro?: string;
  subsections: SubSection[];
}

interface Output {
  version: string;
  attribution?: string;
  sections: Section[];
}

function convertTreeToMarkdown(tree: Root): string {
  const markdown = toMarkdown(tree, { extensions: [gfmToMarkdown()] });
  return markdown.trim();
}

function convertTreeToString(tree: Root): string {
  const markdown = mdastToString(tree);
  return markdown.trim().replace(/\\/g, "");
}

function serializeJson(output: Output): Promise<string> {
  return prettier.format(JSON.stringify(output, null, 2), {
    parser: "json",
  });
}

export async function convertToJson(docType: DocType): Promise<boolean> {
  process.stdout.write(`Converting ${docType} to JSON...`);

  const jsonFilePath = path.join(OUTPUT_PATH, `${docType}.json`);
  const previousJson = fs.existsSync(jsonFilePath)
    ? fs.readFileSync(jsonFilePath, "utf8")
    : "";

  const output: Output = {
    version: "tbd",
    sections: [],
  };

  const markdownFiles = fs
    .readdirSync(MARKDOWN_SEPARATE_PATHS[docType])
    .filter((file) => file.endsWith(".md"))
    .sort();

  const keys: Set<string> = new Set();
  output.sections = markdownFiles.map((file) => {
    const markdownFilePath = path.join(MARKDOWN_SEPARATE_PATHS[docType], file);
    const markdownFileContent = fs.readFileSync(markdownFilePath, "utf8");
    const id = path.basename(file, ".md");
    keys.add(id);
    const tree = fromMarkdown(markdownFileContent, {
      extensions: [gfm()],
      mdastExtensions: [gfmFromMarkdown()],
    });

    let title = id;
    if (tree.children[0].type === "heading") {
      const titleNode = tree.children.shift() as MarkdownHeading;
      title = convertTreeToString({
        type: "root",
        children: titleNode.children,
      });
    }

    let intro = "";
    while (tree.children.length > 0 && tree.children[0].type === "paragraph") {
      if (intro) {
        intro += "\n\n";
      }
      const introNode = tree.children.shift() as MarkdownHeading;
      intro += convertTreeToMarkdown({
        type: "root",
        children: introNode.children,
      });
    }

    const subsections: SubSection[] = [];
    while (tree.children.length > 0) {
      let node = tree.children[0] as Node;

      const newSubsection: SubSection = {
        id: "default",
        title: "",
        content: [],
        order: subsections.length,
      };
      let depth = 2;
      subsections.push(newSubsection);

      if (node.type === "heading") {
        const heading = node as MarkdownHeading;
        depth = heading.depth;
        newSubsection.title = convertTreeToString({
          type: "root",
          children: heading.children,
        });
        newSubsection.id = slugify.default(
          newSubsection.title
            .replace(/ \(.*?\)$/, "")
            .replace(/\#/g, "number")
            .replace(/\&/g, "and"),
          {
            lower: true,
            replacement: "",
            remove: /[*+~.,()'"!:@\\/]/g,
          }
        );
        tree.children.shift();
      }

      keys.add(id + "/" + newSubsection.id + "/0");

      let textSubsection: SubSectionMarkdown = {
        type: "paragraph",
        order: newSubsection.content.length,
        markdown: "",
      };

      node = tree.children[0] as Node;
      while (
        node &&
        (node.type !== "heading" || (node as MarkdownHeading).depth > depth)
      ) {
        tree.children.shift();
        if (node.type === "table") {
          const table = node as Table;
          const rows = table.children.map((row) =>
            row.children.map((cell) =>
              convertTreeToString({
                type: "root",
                children: cell.children,
              })
            )
          );

          const headers: Record<string, string> | undefined = rows
            .shift()
            ?.reduce(
              (a, currentValue) => {
                const fieldName = slugify.default(
                  currentValue.replace(/\#/g, "num"),
                  {
                    lower: true,
                    replacement: "_",
                  }
                );
                a[fieldName ? fieldName : "item"] = currentValue;
                return a;
              },
              {} as Record<string, string>
            );

          newSubsection.content.push({
            type: "table",
            order: newSubsection.content.length,
            headers,
            data: rows.map((row) => {
              const obj: TableRow = {};
              row.forEach((cell, index) => {
                const fieldName = Object.keys(headers ?? {})[index];
                obj[fieldName ? fieldName : "item"] = cell;
              });
              return obj;
            }),
          });
        } else if (node.type === "list") {
          const list = node as List;
          newSubsection.content.push({
            type: "table",
            order: newSubsection.content.length,
            data: list.children.map((item, index) => {
              const itemText = convertTreeToString({
                type: "root",
                children: item.children,
              });
              return list.ordered
                ? { item_num: index + 1, item: itemText }
                : ({ item: itemText } as TableRow);
            }),
          });
        } else {
          const paragraph = node as Paragraph;
          if (textSubsection.markdown === "") {
            newSubsection.content.push(textSubsection);
          } else {
            textSubsection.markdown += "\n\n";
          }
          textSubsection.markdown += convertTreeToMarkdown({
            type: "root",
            children: [paragraph],
          });
        }
        keys.add(`${id}/${newSubsection.id}/${newSubsection.content.length}`);
        node = tree.children[0] as Node;
      }
    }

    return {
      id,
      title,
      intro,
      subsections,
    };
  });

  output.attribution = fs.readFileSync(
    path.join(OUTPUT_PATH, "src", `attribution_${docType}.md`),
    "utf8"
  );

  const previousVersion = previousJson
    ? JSON.parse(previousJson).version ?? "0.0.1"
    : "0.0.1";

  output.version = previousVersion;
  const newJson = await serializeJson(output);
  if (previousJson === newJson) {
    process.stdout.write("Done\n");
    return false;
  }

  let previousKeys: Set<string> = new Set();
  if (previousJson) {
    const previousOutput = JSON.parse(previousJson) as Output;
    previousKeys = new Set(
      previousOutput.sections.flatMap((section) =>
        section.subsections.flatMap((subsection) =>
          [`${section.id}`, `${section.id}/${subsection.id}/0`].concat(
            subsection.content.flatMap((content) => [
              `${section.id}/${subsection.id}/${content.order}`,
            ])
          )
        )
      )
    );
  }

  const newMajorVersion: boolean =
    semver.compare(NEW_MAJOR_VERSIONS[docType], previousVersion) > 0;
  const missingKeys = Array.from(previousKeys).filter((key) => !keys.has(key));
  if (missingKeys.length > 0 && !newMajorVersion) {
    fs.writeFileSync(jsonFilePath, JSON.stringify(output, null, 2));
    throw new Error(
      `The following keys are missing from the new JSON: ${missingKeys.join(
        ", "
      )}\n\nPlease check and bump the NEW_MAJOR_VERSION in json.ts.`
    );
  }

  if (missingKeys.length > 0) {
    output.version = NEW_MAJOR_VERSIONS[docType];
  } else if (keys.size !== previousKeys.size) {
    output.version = semver.inc(previousVersion, "minor") as string;
  } else {
    output.version = semver.inc(previousVersion, "patch") as string;
  }

  fs.writeFileSync(jsonFilePath, await serializeJson(output));

  process.stdout.write("Done\n");

  return true;
}
