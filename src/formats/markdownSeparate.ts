import fs from "fs";
import path from "path";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeRemark from "rehype-remark";
import remarkGfm from "remark-gfm";
import remarkStringify from "remark-stringify";
import { Heading as MarkdownHeading, HTML, Link, Root } from "mdast";
import { toMarkdown } from "mdast-util-to-markdown";
import { gfmToMarkdown } from "mdast-util-gfm";
import { Node } from "unist";
import { visit } from "unist-util-visit";

import { rehypeRemarkOptions } from "./markdown.js";
import { MARKDOWN_SEPARATE_PATH } from "../utils/constants.js";

export async function convertToMarkdownSeparate(
  html: string
): Promise<boolean> {
  process.stdout.write("Converting LGMRD to Markdown (separate files)...");

  const markdownFiles = fs
    .readdirSync(MARKDOWN_SEPARATE_PATH)
    .filter((file) => file.endsWith(".md"))
    .sort();

  const previousMarkdown =
    "\n" +
    markdownFiles
      .map((file) => {
        const markdownFilePath = path.join(MARKDOWN_SEPARATE_PATH, file);
        const markdownFileContent = fs.readFileSync(markdownFilePath, "utf8");
        return markdownFileContent;
      })
      .join("\n");

  const sections: Record<string, Node[]> = {};
  let currentSection: Node[] = [];
  let currentSectionName: string = "index";

  const sectionCapturePlugin = () => {
    return (tree: Root) => {
      for (const node of tree.children) {
        if (node.type === "heading") {
          const heading = node as MarkdownHeading;
          const id = (heading?.children?.[0] as HTML)?.value;
          if (heading.depth === 2 && id.startsWith('<a id="')) {
            sections[currentSectionName] = currentSection;
            currentSection = [];
            currentSectionName = /^<a id="(.*?)"/.exec(id)![1];
            heading.children.shift();
          }
        }
        currentSection.push(node);
      }
      sections[currentSectionName] = currentSection;
    };
  };

  await unified()
    .use(rehypeParse)
    .use(rehypeRemark, rehypeRemarkOptions)
    .use(remarkGfm)
    .use(sectionCapturePlugin)
    .use(remarkStringify)
    .process(html);

  let newMarkdown = "";
  for (const sectionName of Object.keys(sections).sort()) {
    const section = sections[sectionName];
    const markdownFilePath = path.join(
      MARKDOWN_SEPARATE_PATH,
      `${sectionName}.md`
    );
    const tree = { type: "root", children: section } as Root;
    if (sectionName !== "index") {
      visit(tree, "heading", (node: MarkdownHeading) => {
        node.depth = Math.max(node.depth - 1, 1) as 1 | 2 | 3 | 4 | 5 | 6;
      });
    }
    visit(tree, "link", (node: Link) => {
      if (node.url.startsWith("#")) {
        const possibleId = node.url.slice(1);
        if (possibleId in sections) {
          node.url = `${possibleId}.md`;
        }
      }
    });
    const markdown = toMarkdown(tree, { extensions: [gfmToMarkdown()] });
    newMarkdown += "\n" + markdown;
    fs.writeFileSync(markdownFilePath, markdown);
  }

  process.stdout.write("Done\n");

  return previousMarkdown !== newMarkdown;
}
