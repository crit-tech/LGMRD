import fs from "fs";
import path from "path";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeRemark from "rehype-remark";
import { defaultHandlers, State } from "hast-util-to-mdast";
import remarkGfm from "remark-gfm";
import remarkStringify from "remark-stringify";
import { Heading as MarkdownHeading } from "mdast";
import { Root } from "mdast";

import getHtmlPlugin from "../utils/html.js";
import removePosition from "../utils/removePosition.js";
import { DocType, OUTPUT_PATH } from "../utils/constants.js";

function getMarkdownPlugin(callback: (tree: Root) => void) {
  return () => {
    return (tree: Root) => {
      callback(tree);
    };
  };
}

function getHeadingHandler(tagName: string) {
  return (state: State, node: any) => {
    const content = (defaultHandlers as any)[tagName](state, node);
    if (node?.properties?.id && (content as MarkdownHeading)?.children) {
      (content as MarkdownHeading).children.unshift({
        type: "html",
        value: `<a id="${node.properties.id}"></a>`,
      });
    }
    return content;
  };
}

export const rehypeRemarkOptions = {
  handlers: {
    h1: getHeadingHandler("h1"),
    h2: getHeadingHandler("h2"),
    h3: getHeadingHandler("h3"),
    h4: getHeadingHandler("h4"),
    h5: getHeadingHandler("h5"),
    h6: getHeadingHandler("h6"),
  },
};

export async function convertToMarkdown(
  docType: DocType,
  html: string
): Promise<boolean> {
  const htmlPlugin = getHtmlPlugin((tree) => {
    const treeCopy = removePosition(tree);
    fs.writeFileSync(
      path.join(OUTPUT_PATH, "metadata", `${docType}_hast.json`),
      JSON.stringify(treeCopy, null, 2)
    );
  });

  const markdownPlugin = getMarkdownPlugin((tree) => {
    const treeCopy = removePosition(tree);
    fs.writeFileSync(
      path.join(OUTPUT_PATH, "metadata", `${docType}_mdast.json`),
      JSON.stringify(treeCopy, null, 2)
    );
  });

  process.stdout.write(`Converting ${docType} to Markdown...`);

  const markdownFilePath = path.join(OUTPUT_PATH, `${docType}.md`);
  const previousMarkdown = fs.existsSync(markdownFilePath)
    ? fs.readFileSync(markdownFilePath, "utf-8")
    : "";

  const markdown = await unified()
    .use(rehypeParse)
    .use(htmlPlugin)
    .use(rehypeRemark, rehypeRemarkOptions)
    .use(remarkGfm)
    .use(markdownPlugin)
    .use(remarkStringify)
    .process(html);

  fs.writeFileSync(markdownFilePath, markdown.toString());

  process.stdout.write("Done\n");

  return previousMarkdown !== markdown.toString();
}
