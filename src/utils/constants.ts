import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const OUTPUT_PATH = path.resolve(__dirname, "..", "..");

export type OutputFormat =
  | "html"
  | "pdf"
  | "epub"
  | "markdown"
  | "markdown_separate"
  | "json";

export type DocType = "LGMRD" | "5e_Monster_Builder";

export const DOC_URLS: Record<DocType, string> = {
  LGMRD: "https://slyflourish.com/lazy_gm_resource_document.html",
  "5e_Monster_Builder":
    "https://slyflourish.com/lazy_5e_monster_building_resource_document.html",
};

export const MARKDOWN_SEPARATE_PATHS: Record<DocType, string> = {
  LGMRD: path.join(OUTPUT_PATH, "markdown_separate"),
  "5e_Monster_Builder": path.join(
    OUTPUT_PATH,
    "markdown_separate_5e_monster_builder"
  ),
};
