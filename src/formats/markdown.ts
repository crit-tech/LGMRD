import fs from "fs";
import path from "path";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeRemark from "rehype-remark";
import { defaultHandlers, State } from "hast-util-to-mdast";
import { toHtml } from "hast-util-to-html";
import remarkGfm from "remark-gfm";
import remarkStringify from "remark-stringify";
import { Heading as MarkdownHeading, Html } from "mdast";
import { Element } from "hast";
import { visit } from "unist-util-visit";

import getHtmlPlugin from "../utils/html.js";
import removePosition from "../utils/removePosition.js";
import { DocType, OUTPUT_PATH } from "../utils/constants.js";
import { getMarkdownPlugin, columnSmasherPlugin } from "../utils/markdown.js";

type HandlerFunc<T> = (state: State, node: Readonly<Element>) => T;
type DefaultHandlers<T> = Record<string, HandlerFunc<T>>;
const headingHandlers =
  defaultHandlers as unknown as DefaultHandlers<MarkdownHeading>;

function getHeadingHandler(tagName: string) {
  return (state: State, node: Readonly<Element>) => {
    const content = headingHandlers[tagName](state, node);
    if (node.properties?.id && content.children) {
      content.children.unshift({
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
    td: (state: State, node: Readonly<Element>) => {
      let nestedList: Element | undefined;
      visit(node, "element", (cell) => {
        if (cell.tagName !== "ul") return;
        nestedList = cell;
      });
      const content = defaultHandlers.td(state, node);
      if (!nestedList) return content;

      visit(content, "list", (list: Html) => {
        list.type = "html";
        list.value = toHtml(nestedList!);
      });
      return content;
    },
  },
};

export async function convertToMarkdown(
  docType: DocType,
  html: string
): Promise<boolean> {
  const saveHastPlugin = getHtmlPlugin((tree) => {
    const treeCopy = removePosition(tree);
    fs.writeFileSync(
      path.join(OUTPUT_PATH, "metadata", `${docType}_hast.json`),
      JSON.stringify(treeCopy, null, 2)
    );
  });

  const saveMdastPlugin = getMarkdownPlugin((tree) => {
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
    .use(saveHastPlugin)
    .use(rehypeRemark, rehypeRemarkOptions)
    .use(remarkGfm)
    .use(saveMdastPlugin)
    .use(columnSmasherPlugin)
    .use(remarkStringify)
    .process(html);

  fs.writeFileSync(markdownFilePath, markdown.toString());

  process.stdout.write("Done\n");

  return previousMarkdown !== markdown.toString();
}
