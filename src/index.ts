import { fetchDocument } from "./utils/fetch.js";
import { convertToMarkdown } from "./plugins/markdown.js";
import { updateReadme } from "./utils/updateReadme.js";

async function run() {
  const html = await fetchDocument();

  const markdownUpdated = await convertToMarkdown(html);
  if (markdownUpdated) {
    updateReadme("markdown");
  }
}

run();
