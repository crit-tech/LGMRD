import { exec } from "child_process";
import fs from "fs/promises";
import path from "path";

import semver from "semver";
import * as prettier from "prettier";

import { DocType, OUTPUT_PATH } from "./constants.js";

function formatJs(js: string): Promise<string> {
  return prettier.format(js, { parser: "babel" });
}

export async function publishJsonPackage(docType: DocType): Promise<void> {
  const packageName =
    docType === "5e_Monster_Builder" ? "lgmmbrd" : docType.toLowerCase();
  const packagePath = path.join(OUTPUT_PATH, "packages", packageName);
  const packageJsonPath = path.join(packagePath, "package.json");

  const packageJsonContents = await fs.readFile(packageJsonPath, "utf-8");
  const packageJson = JSON.parse(packageJsonContents);

  const sourceJsonPath = path.join(OUTPUT_PATH, `${docType}.json`);
  const sourceJsonContents = await fs.readFile(sourceJsonPath, "utf-8");
  const sourceJson = JSON.parse(sourceJsonContents);

  const previousVersion = packageJson.version;

  if (semver.compare(packageJson.version, sourceJson.version) >= 0) {
    console.log(
      `Package ${packageName} version ${packageJson.version} is up to date.`
    );
    return;
  }

  packageJson.version = sourceJson.version;
  await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
  await fs.writeFile(
    path.join(packagePath, "index.cjs"),
    await formatJs(`module.exports.default = ${sourceJsonContents};`)
  );
  await fs.writeFile(
    path.join(packagePath, "index.mjs"),
    await formatJs(`export default ${sourceJsonContents};`)
  );

  // find all tables in sourceJson

  const tables: Record<string, any> = {};
  const sections = sourceJson.sections;
  for (const section of sections) {
    for (const subsection of section.subsections) {
      for (const content of subsection.content) {
        if (content.type === "table") {
          const tableId = `${section.id}/${subsection.id}/${content.order}`;
          console.log(tableId);
          tables[tableId] = content;
        }
      }
    }
  }

  // const npmPublish = exec("npm publish --access=public", { cwd: packagePath });
  // npmPublish.stdout?.pipe(process.stdout);
  // npmPublish.stderr?.pipe(process.stderr);
  // await new Promise((resolve) => npmPublish.on("exit", resolve));

  // if (npmPublish.exitCode !== 0) {
  //   console.error(`npm publish failed for ${packageName}`);
  //   packageJson.version = previousVersion;
  //   await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
  // }
}
