import path from "path";
import fs from "fs";

import type { DocType } from "./utils/constants.js";
import { OUTPUT_PATH } from "./utils/constants.js";
import { fetchDocument } from "./utils/fetch.js";
import { publishJsonPackage } from "./utils/publishJsonPackages.js";
import { convertToMarkdown } from "./formats/markdown.js";
import { convertToMarkdownSeparate } from "./formats/markdownSeparate.js";
import { convertToMarkdownObsidian } from "./formats/markdownObsidian.js";
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

  const markdownObsidianUpdated = await convertToMarkdownObsidian(docType);
  if (markdownObsidianUpdated) {
    logUpdate(docType, "markdown_obsidian");
  }

  const jsonUpdated = await convertToJson(docType);
  if (jsonUpdated) {
    logUpdate(docType, "json");
  }

}

async function run() {
  const docTypes: DocType[] = ["LGMRD", "5e_Monster_Builder"];
  for (const docType of docTypes) {
    await createOutput(docType);
  }

  // Publish after all outputs are generated so a publish failure doesn't
  // prevent the other document from being built.
  const publishErrors: unknown[] = [];
  for (const docType of docTypes) {
    try {
      await publishJsonPackage(docType);
    } catch (error) {
      console.error(error instanceof Error ? error.message : error);
      publishErrors.push(error);
    }
  }

  // Tell the workflow the generated files are complete and safe to commit,
  // even if publishing failed below.
  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, "outputs_generated=true\n");
  }

  if (publishErrors.length > 0) {
    console.error(`${publishErrors.length} package(s) failed to publish`);
    process.exitCode = 1;
  }
}

run();
