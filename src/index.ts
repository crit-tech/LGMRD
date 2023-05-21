import { fetchDocument } from "./utils/fetch.js";
import { convertToMarkdown } from "./plugins/markdown.js";

async function run() {
  const html = await fetchDocument();

  process.stdout.write("Converting LGMRD to Markdown...");
  await convertToMarkdown(html);
  process.stdout.write("Done\n");
}

run();
