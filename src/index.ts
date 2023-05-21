import { fetchDocument } from "./utils/fetch.js";
import { convertToMarkdown } from "./plugins/markdown.js";

async function run() {
  const html = await fetchDocument();

  await convertToMarkdown(html);
}

run();
