import fs from "fs";
import { CACHED_FILE, CACHE_FOLDER, LGMRD_URL } from "./constants.js";

export async function fetchDocument(): Promise<string> {
  let html: string;

  if (!fs.existsSync(CACHE_FOLDER)) {
    fs.mkdirSync(CACHE_FOLDER);
  }

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

  return html;
}
