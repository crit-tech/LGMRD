import fs from "fs";
import path from "path";

import { Root, Table, TableCell, TableRow } from "mdast";
import { visit } from "unist-util-visit";

export function getMarkdownPlugin(callback: (tree: Root) => void) {
  return () => {
    return (tree: Root) => {
      callback(tree);
    };
  };
}

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

const isDieRoll = (cell: TableCell) =>
  cell.children[0]?.type === "text" && cell.children[0]?.value.startsWith("d");

export const columnSmasherPlugin = getMarkdownPlugin((tree) => {
  const tables: Table[] = [];
  visit(tree, "table", (node) => {
    tables.push(node);
  });

  // For each table, if the first and third columns are die rolls, combine them
  for (const table of tables) {
    const headerRow = table.children[0];
    if (headerRow.children.length !== 4) continue;
    const [header1, _header2, header3] = headerRow.children;
    if (!isDieRoll(header1) || !isDieRoll(header3)) continue;

    const newRows: TableRow[] = [];
    for (const row of table.children) {
      const [cell1, cell2, cell3, cell4] = row.children;
      row.children = [cell1, cell2];
      if (isDieRoll(cell3)) continue; // don't add another header row
      newRows.push({ type: "tableRow", children: [cell3, cell4] });
    }
    table.children = [...table.children, ...newRows];
  }
});
