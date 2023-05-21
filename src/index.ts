import fs from "fs";
import path from "path";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeRemark, { defaultHandlers } from "rehype-remark";
import type { H as State } from "rehype-remark";
import remarkGfm from "remark-gfm";
import remarkStringify from "remark-stringify";
import { Heading as MarkdownHeading } from "mdast";
import { fileURLToPath } from "url";

import getHtmlPlugin from "./plugins/html.js";
import getMarkdownPlugin from "./plugins/markdown.js";
import removePosition from "./utils/removePosition.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LGMRD_URL = "https://slyflourish.com/lazy_gm_resource_document.html";
const CACHE_FOLDER = path.join(__dirname, "cache");
const CACHED_FILE = path.join(CACHE_FOLDER, "cached.html");
const OUTPUT_PATH = path.resolve(__dirname, "..");

async function convertToMarkdown(html: string): Promise<void> {
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
}

async function run() {
  let html: string;

  if (!fs.existsSync(CACHE_FOLDER)) {
    fs.mkdirSync(CACHE_FOLDER);
  }

  if (!fs.existsSync(CACHED_FILE)) {
    process.stdout.write("Downloading LGMRD...");
    const response = await fetch(LGMRD_URL);
    html = await response.text();
    fs.writeFileSync(CACHED_FILE, html);
  } else {
    process.stdout.write("Using cached LGMRD...");
    html = fs.readFileSync(CACHED_FILE, "utf-8");
  }
  process.stdout.write("Done\n");

  process.stdout.write("Converting LGMRD to Markdown...");
  await convertToMarkdown(html);
  process.stdout.write("Done\n");
}

run();
