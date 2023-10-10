import type { DocType } from "./constants.js";
import { DOC_URLS } from "./constants.js";

export async function fetchDocument(docType: DocType): Promise<string> {
  process.stdout.write(`Downloading ${docType}...`);
  const response = await fetch(DOC_URLS[docType]);
  const html = await response.text();
  process.stdout.write("Done\n");

  return html;
}
