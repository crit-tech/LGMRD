import { fetchDocument } from "./utils/fetch.js";
import { convertToMarkdown } from "./formats/markdown.js";
import { convertToMarkdownSeparate } from "./formats/markdownSeparate.js";
import { logUpdate } from "./utils/logUpdate.js";

async function run() {
  const html = await fetchDocument();

  const markdownUpdated = await convertToMarkdown(html);
  if (markdownUpdated) {
    logUpdate("markdown");
  }

  const markdownSeparateUpdated = await convertToMarkdownSeparate(html);
  if (markdownSeparateUpdated) {
    logUpdate("markdown_separate");
  }
}

run();
