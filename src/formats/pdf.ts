import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";
import * as cheerio from "cheerio";

import { DocType, OUTPUT_PATH } from "../utils/constants.js";

export async function convertToPdf(
  docType: DocType,
  html: string
): Promise<void> {
  const pdfPath = path.join(OUTPUT_PATH, `${docType}.pdf`);

  process.stdout.write(`Converting ${docType} to PDF...`);

  const $ = cheerio.load(html);
  const h3s = $("h3");
  // wrap every h3 and it's next sibling in a section
  h3s.each((i, h3) => {
    const $h3 = $(h3);
    const $section = $("<section class='keep_together'></section>");
    $h3.next().addBack().wrapAll($section);
  });

  // find sections that only contain a h3 and an ol
  const listSections = $("section:has(h3 + ol)").filter((i, section) => {
    const $section = $(section);
    return $section.children().length === 2;
  });
  // wrap listSections in a section.lists
  listSections.wrapAll("<section class='lists'></section>");

  const printCss = fs.readFileSync(
    path.join(OUTPUT_PATH, "src/formats/pdf.css"),
    "utf-8"
  );
  const styledHtml = $.html().replace(
    "</style>",
    `\n\n${printCss}\n\n</style>`
  );

  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.setContent(styledHtml, { waitUntil: "domcontentloaded" });
  await page.pdf({
    path: pdfPath,
    displayHeaderFooter: true,
    headerTemplate: ` &nbsp; `,
    footerTemplate: `<div style="font-size: 9px; margin-left: 0.5in; margin-right: 0.5in; width: 7in; text-align: center; color: #999;">Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>`,
  });

  await browser.close();

  process.stdout.write("Done\n");
}
