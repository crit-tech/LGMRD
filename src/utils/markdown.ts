import fs from "fs";
import path from "path";

export function getMarkdownFiles(folder: string): string[] {
  return fs
    .readdirSync(folder)
    .filter((file) => file.endsWith(".md"))
    .sort()
    .map((file) => path.join(folder, file));
}

export function getAndDeletePreviousMarkdown(folder: string): string {
  const markdownFiles = getMarkdownFiles(folder);

  return (
    "\n" +
    markdownFiles
      .map((file) => {
        const markdownFileContent = fs.readFileSync(file, "utf8");
        fs.unlinkSync(file);
        return markdownFileContent;
      })
      .join("\n")
  );
}
