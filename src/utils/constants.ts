import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const LGMRD_URL =
  "https://slyflourish.com/lazy_gm_resource_document.html";
export const CACHE_FOLDER = path.join(__dirname, "..", "cache");
export const CACHED_FILE = path.join(CACHE_FOLDER, "cached.html");
export const OUTPUT_PATH = path.resolve(__dirname, "..", "..");
export const MARKDOWN_SEPARATE_PATH = path.join(
  OUTPUT_PATH,
  "markdown_separate"
);
