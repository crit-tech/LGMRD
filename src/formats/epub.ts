/// <reference path="./pdwrapper.d.ts" />

import path from "path";
import PandocJS from "pandoc-wrapper";

import { OUTPUT_PATH } from "../utils/constants.js";

export async function convertToEpub(
  htmlPath: string,
  epubPath: string
): Promise<void> {
  process.stdout.write("Converting LGMRD to EPUB...");

  process.env.PANDOC_BINARY_PATH = path.resolve(
    OUTPUT_PATH,
    "pandoc/bin/pandoc"
  );
  const pandoc = new PandocJS({ runAsAsync: true });
  await new Promise<void>((resolve, reject) => {
    pandoc
      .convert(htmlPath, epubPath, "epub", "html")
      .then(() => {
        // do things with your file, there is no return value
        resolve();
      })
      .catch((err: any) => {
        // some helpful, build-in exceptions
        if (err.name == "EXECUTABLE_NOT_FOUND")
          console.log("Executable for pandoc not found");
        else if (err.name == "INPUT_FILE_NOT_FOUND")
          console.log("Could not find input file specified");
        else if (err.name == "INVALID_FILE_FORMAT")
          console.log("File Format specified (e.g. 'html') was not correct");
        else if (err.name == "STDERR_EXCEPTION")
          console.log("All other exceptions generated");

        reject(err);
      });
  });

  process.stdout.write("Done\n");
}
