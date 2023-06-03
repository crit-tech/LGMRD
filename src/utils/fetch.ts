import { LGMRD_URL } from "./constants.js";

export async function fetchDocument(): Promise<string> {
  process.stdout.write("Downloading LGMRD...");
  const response = await fetch(LGMRD_URL);
  const html = await response.text();
  process.stdout.write("Done\n");

  return html;
}
