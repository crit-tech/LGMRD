import fs from "fs";
import path from "path";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeRemark from "rehype-remark";
import remarkGfm from "remark-gfm";
import remarkStringify from "remark-stringify";
import { Heading as MarkdownHeading, Html, Link, Root } from "mdast";
import { toMarkdown } from "mdast-util-to-markdown";
import { gfmToMarkdown } from "mdast-util-gfm";
import { Node } from "unist";
import { visit } from "unist-util-visit";

import { rehypeRemarkOptions } from "./markdown.js";
import { DocType, MARKDOWN_SEPARATE_PATHS } from "../utils/constants.js";
import {
  getAndDeletePreviousMarkdown,
  columnSmasherPlugin,
} from "../utils/markdown.js";

interface Section {
  sectionName: string;
  nodes: Node[];
}

export async function convertToMarkdownSeparate(
  docType: DocType,
  html: string
): Promise<boolean> {
  process.stdout.write(`Converting ${docType} to Markdown (separate files)...`);

  const previousMarkdown = getAndDeletePreviousMarkdown(
    MARKDOWN_SEPARATE_PATHS[docType]
  );

  const sections: Section[] = [];
  let currentSectionName: string = "index";
  let currentSection: Section = { sectionName: currentSectionName, nodes: [] };
  let currentSectionIndex = 0;

  const sectionCapturePlugin = () => {
    return (tree: Root) => {
      for (const node of tree.children) {
        if (node.type === "heading") {
          const heading = node as MarkdownHeading;
          const id = (heading?.children?.[0] as Html)?.value;
          if (heading.depth === 2 && id.startsWith('<a id="')) {
            sections.push(currentSection);
            currentSectionName = /^<a id="(.*?)"/.exec(id)![1];
            currentSectionIndex++;
            currentSection = { sectionName: currentSectionName, nodes: [] };
            heading.children.shift();
          }
        }
        currentSection.nodes.push(node);
      }
      sections.push(currentSection);
    };
  };

  await unified()
    .use(rehypeParse)
    .use(rehypeRemark, rehypeRemarkOptions)
    .use(remarkGfm)
    .use(columnSmasherPlugin)
    .use(sectionCapturePlugin)
    .use(remarkStringify)
    .process(html);

  let newMarkdown = "";
  sections.map((section, sectionIndex) => {
    const chapter = (sectionIndex + 1).toString().padStart(2, "0");
    const markdownFilePath = path.join(
      MARKDOWN_SEPARATE_PATHS[docType],
      `${chapter}-${section.sectionName}.md`
    );
    const tree = { type: "root", children: section.nodes } as Root;
    if (section.sectionName !== "index") {
      visit(tree, "heading", (node: MarkdownHeading) => {
        node.depth = Math.max(node.depth - 1, 1) as 1 | 2 | 3 | 4 | 5 | 6;
      });
    }
    visit(tree, "link", (node: Link) => {
      if (node.url.startsWith("#")) {
        const possibleId = node.url.slice(1);
        const possibleIndex = sections.findIndex(
          (section) => section.sectionName === possibleId
        );
        if (possibleIndex !== -1) {
          const possibleChapter = (possibleIndex + 1)
            .toString()
            .padStart(2, "0");
          node.url = `${possibleChapter}-${possibleId}.md`;
        }
      }
    });
    const markdown = toMarkdown(tree, { extensions: [gfmToMarkdown()] });
    newMarkdown += "\n" + markdown;
    fs.writeFileSync(markdownFilePath, markdown);
  });

  process.stdout.write("Done\n");

  return previousMarkdown !== newMarkdown;
}
