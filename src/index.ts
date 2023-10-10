import path from "path";
import fs from "fs";

import type { DocType } from "./utils/constants.js";
import { OUTPUT_PATH } from "./utils/constants.js";
import { fetchDocument } from "./utils/fetch.js";
import { convertToMarkdown } from "./formats/markdown.js";
import { convertToMarkdownSeparate } from "./formats/markdownSeparate.js";
import { convertToJson } from "./formats/json.js";
import { logUpdate } from "./utils/logUpdate.js";
import { convertToPdf } from "./formats/pdf.js";
import { convertToEpub } from "./formats/epub.js";

async function createOutput(docType: DocType) {
  const filePath = path.join(OUTPUT_PATH, `${docType}.html`);
  const prevHtml = fs.existsSync(filePath)
    ? fs.readFileSync(filePath, "utf-8")
    : "";
  const html = await fetchDocument(docType);

  if (html !== prevHtml) {
    fs.writeFileSync(filePath, html);
    logUpdate(docType, "html");
  }

  if (
    html !== prevHtml ||
    !fs.existsSync(path.join(OUTPUT_PATH, `${docType}.pdf`))
  ) {
    await convertToPdf(docType, html);
    logUpdate(docType, "pdf");
  }

  const epubPath = path.join(OUTPUT_PATH, `${docType}.epub`);
  if (html !== prevHtml || !fs.existsSync(epubPath)) {
    await convertToEpub(docType, filePath, epubPath);
    logUpdate(docType, "epub");
  }

  const markdownUpdated = await convertToMarkdown(docType, html);
  if (markdownUpdated) {
    logUpdate(docType, "markdown");
  }

  const markdownSeparateUpdated = await convertToMarkdownSeparate(
    docType,
    html
  );
  if (markdownSeparateUpdated) {
    logUpdate(docType, "markdown_separate");
  }

  const jsonUpdated = await convertToJson(docType);
  if (jsonUpdated) {
    logUpdate(docType, "json");
  }
}

async function run() {
  await createOutput("LGMRD");
  await createOutput("5e_Monster_Builder");
}

run();
