import fs from "fs";
import path from "path";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeRemark, { defaultHandlers } from "rehype-remark";
import type { H as State } from "rehype-remark";
import remarkGfm from "remark-gfm";
import remarkStringify from "remark-stringify";
import { Heading as MarkdownHeading } from "mdast";
import { Root } from "mdast";

import getHtmlPlugin from "./html.js";
import removePosition from "../utils/removePosition.js";
import { OUTPUT_PATH } from "../utils/constants.js";

function getMarkdownPlugin(callback: (tree: Root) => void) {
  return () => {
    return (tree: Root) => {
      callback(tree);
    };
  };
}

export async function convertToMarkdown(html: string): Promise<void> {
  const htmlPlugin = getHtmlPlugin((tree) => {
    const treeCopy = removePosition(tree);
    fs.writeFileSync(
      path.join(OUTPUT_PATH, "LGMRD_hast.json"),
      JSON.stringify(treeCopy, null, 2)
    );
  });

  const markdownPlugin = getMarkdownPlugin((tree) => {
    const treeCopy = removePosition(tree);
    fs.writeFileSync(
      path.join(OUTPUT_PATH, "LGMRD_mdast.json"),
      JSON.stringify(treeCopy, null, 2)
    );
  });

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

  process.stdout.write("Converting LGMRD to Markdown...");

  const markdown = await unified()
    .use(rehypeParse)
    .use(htmlPlugin)
    .use(rehypeRemark, {
      handlers: {
        h1: getHeadingHandler("h1"),
        h2: getHeadingHandler("h2"),
        h3: getHeadingHandler("h3"),
        h4: getHeadingHandler("h4"),
        h5: getHeadingHandler("h5"),
        h6: getHeadingHandler("h6"),
      },
    })
    .use(remarkGfm)
    .use(markdownPlugin)
    .use(remarkStringify)
    .process(html);

  fs.writeFileSync(path.join(OUTPUT_PATH, "LGMRD.md"), markdown.toString());

  process.stdout.write("Done\n");
}
