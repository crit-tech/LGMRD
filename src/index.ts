import path from "path";
import fs from "fs";

import { OUTPUT_PATH } from "./utils/constants.js";
import { fetchDocument } from "./utils/fetch.js";
import { convertToMarkdown } from "./formats/markdown.js";
import { convertToMarkdownSeparate } from "./formats/markdownSeparate.js";
import { convertToJson } from "./formats/json.js";
import { logUpdate } from "./utils/logUpdate.js";

async function run() {
  const filePath = path.join(OUTPUT_PATH, "LGMRD.html");
  const prevHtml = fs.existsSync(filePath)
    ? fs.readFileSync(filePath, "utf-8")
    : "";
  const html = await fetchDocument();

  if (html !== prevHtml) {
    fs.writeFileSync(filePath, html);
    logUpdate("html");
  }

  const markdownUpdated = await convertToMarkdown(html);
  if (markdownUpdated) {
    logUpdate("markdown");
  }

  const markdownSeparateUpdated = await convertToMarkdownSeparate(html);
  if (markdownSeparateUpdated) {
    logUpdate("markdown_separate");
  }

  const jsonUpdated = await convertToJson();
  if (jsonUpdated) {
    logUpdate("json");
  }
}

run();
