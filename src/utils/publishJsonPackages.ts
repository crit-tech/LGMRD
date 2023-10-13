import { exec } from "child_process";
import fs from "fs/promises";
import path from "path";

import semver from "semver";
import * as prettier from "prettier";
import wrap from "word-wrap";

import { DocType, OUTPUT_PATH } from "./constants.js";
import { updateReadme } from "./packageReadme.js";

function formatJs(js: string): Promise<string> {
  return prettier.format(js, { parser: "babel" });
}

type ModuleResolution = {
  import: string;
  require: string;
};

type ModuleFormat = {
  [module: string]: ModuleResolution;
};

function formatModule(module: string, path: string): ModuleFormat {
  return {
    [module]: {
      import: path + ".mjs",
      require: path + ".cjs",
    },
  };
}

export async function publishJsonPackage(docType: DocType): Promise<void> {
  const packageName =
    docType === "5e_Monster_Builder" ? "lgmmbrd" : docType.toLowerCase();
  const packagePath = path.join(OUTPUT_PATH, "packages", packageName);
  const packageJsonPath = path.join(packagePath, "package.json");

  const packageJsonContents = await fs.readFile(packageJsonPath, "utf-8");
  const packageJson = JSON.parse(packageJsonContents);

  const sourceJsonPath = path.join(OUTPUT_PATH, `${docType}.json`);
  let sourceJsonContents = await fs.readFile(sourceJsonPath, "utf-8");
  const sourceJson = JSON.parse(sourceJsonContents);

  const previousVersion = packageJson.version;

  if (semver.compare(packageJson.version, sourceJson.version) >= 0) {
    console.log(
      `Package ${packageName} version ${packageJson.version} is up to date.`
    );
    return;
  }

  const attributionCommentHeader =
    "/*\n" +
    wrap(sourceJson.attribution.replace(/\[(.*?)\]\((.*?)\)/g, "$1 ($2)"), {
      width: 80,
      indent: " * ",
    }) +
    "\n */\n";
  sourceJsonContents = JSON.stringify(sourceJson);

  await fs.writeFile(
    path.join(packagePath, "index.cjs"),
    await formatJs(
      `${attributionCommentHeader}\nmodule.exports = ${sourceJsonContents};`
    )
  );
  await fs.writeFile(
    path.join(packagePath, "index.mjs"),
    await formatJs(
      `${attributionCommentHeader}\nexport default ${sourceJsonContents};`
    )
  );

  const sections = sourceJson.sections;
  const sectionsPath = path.join(packagePath, "sections");
  const sectionModules: string[] = [];
  for (const section of sections) {
    const sectionPath = path.join(sectionsPath, section.id);
    await fs.mkdir(sectionPath, { recursive: true });
    for (const subsection of section.subsections) {
      const baseFileName = path.join(sectionPath, subsection.id);
      sectionModules.push(`./${section.id}/${subsection.id}`);
      await fs.writeFile(
        `${baseFileName}.cjs`,
        await formatJs(
          `${attributionCommentHeader}\nmodule.exports = ${JSON.stringify(
            subsection
          )};`
        )
      );

      await fs.writeFile(
        `${baseFileName}.mjs`,
        await formatJs(
          `${attributionCommentHeader}\nexport default ${JSON.stringify(
            subsection
          )};`
        )
      );
    }
  }

  // Update package.json
  packageJson.version = sourceJson.version;
  packageJson.exports = {
    ...formatModule(".", "./index"),
    ...sectionModules.reduce(
      (acc, sectionModule) => {
        return {
          ...acc,
          ...formatModule(
            sectionModule,
            sectionModule.replace("./", "./sections/")
          ),
        };
      },
      {} as Record<string, ModuleResolution>
    ),
  } as Record<string, ModuleResolution>;
  await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));

  // Update README.md
  const readmePath = path.join(packagePath, "README.md");
  const readmeContents = await fs.readFile(readmePath, "utf-8");
  const newReadmeContents = updateReadme(
    readmeContents,
    packageName,
    sourceJson.attribution,
    sections[0].id + "/" + sections[0].subsections[0].id
  );
  await fs.writeFile(readmePath, newReadmeContents);

  const npmPublish = exec("npm publish --access=public", { cwd: packagePath });
  npmPublish.stdout?.pipe(process.stdout);
  npmPublish.stderr?.pipe(process.stderr);
  await new Promise((resolve) => npmPublish.on("exit", resolve));

  if (npmPublish.exitCode !== 0) {
    console.error(`npm publish failed for ${packageName}`);
    packageJson.version = previousVersion;
    await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
  }
}
