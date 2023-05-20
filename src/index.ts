import fs from "fs";
import path from "path";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeRemark from "rehype-remark";
import remarkGfm from "remark-gfm";
import remarkStringify from "remark-stringify";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LGMRD_URL = "https://slyflourish.com/lazy_gm_resource_document.html";
const CACHED_FILE = path.join(__dirname, "cache", "cached.html");
const OUTPUT_PATH = path.resolve(__dirname, "..");

async function convertToMarkdown(html: string): Promise<void> {
  const markdown = await unified()
    .use(rehypeParse)
    .use(rehypeRemark)
    .use(remarkGfm)
    .use(remarkStringify)
    .process(html);
  fs.writeFileSync(path.join(OUTPUT_PATH, "LGMRD.md"), markdown.toString());
}

async function run() {
  let html: string;

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
