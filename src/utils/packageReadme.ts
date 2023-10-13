export function updateReadme(
  currentContents: string,
  packageName: string,
  attribution: string,
  exampleSection: string
): string {
  const c = "```";
  const p = packageName;

  const template: string = `## Usage

### ESM

${c}js
import ${p} from "@crit-tech/${p}";

console.log(${p});
${c}

Or, you may want to import it asynchronously so it's not part of your main bundle:

${c}js
import("@crit-tech/${p}").then((${p}) => {
  console.log(${p});
});
${c}

Or, you can just import specific sections (see \`package.json\` for the full list of exported sections):

${c}js
import data from "@crit-tech/${p}/${exampleSection}";

console.log(data);
${c}

### CommonJS

${c}js
const ${p} = require("@crit-tech/${p}");

console.log(${p});
${c}

Or, you can just import specific sections (see \`package.json\` for the full list of exported sections):

${c}js
const data = require("@crit-tech/${p}/${exampleSection}");

console.log(data);
${c}

## Attribution

${attribution}`;

  const header = currentContents.slice(0, currentContents.indexOf("## Usage"));

  return header + template;
}
