import type { DocType } from "./constants.js";
import { DOC_URLS } from "./constants.js";

export async function fetchDocument(docType: DocType): Promise<string> {
  process.stdout.write(`Downloading ${docType}...`);
  const response = await fetch(DOC_URLS[docType]);
  let html = await response.text();

  // fix bug in first release of monster builder HTML
  if (docType === "5e_Monster_Builder") {
    html = html.replace(
      `  th.nowrap, td.nowrap {
    white-space: nowrap;
  table {max-width: 800px}`,
      `  th.nowrap, td.nowrap {
    white-space: nowrap;
  }
  table {max-width: 800px}`
    );
  }

  process.stdout.write("Done\n");

  return html;
}
