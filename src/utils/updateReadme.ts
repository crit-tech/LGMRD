import fs from "fs";
import path from "path";

import { OUTPUT_PATH } from "./constants.js";

const README_PATH = path.join(OUTPUT_PATH, "README.md");

export function updateReadme(type: "markdown") {
  const id = `${type}-last-updated`;
  const readme = fs.readFileSync(README_PATH, "utf-8");
  const timestamp = new Date().toUTCString();

  const updatedReadme = readme.replace(
    new RegExp(`<span id="${id}">.*?</span>`),
    `<span id="${id}">${timestamp}</span>`
  );

  fs.writeFileSync(README_PATH, updatedReadme);
}
