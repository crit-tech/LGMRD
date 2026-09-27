import type { DocType } from "./constants.js";
import { DOC_URLS } from "./constants.js";

const MAX_ATTEMPTS = 5;
const BASE_DELAY_MS = 1000;
const MAX_DELAY_MS = 30000;
const REQUEST_TIMEOUT_MS = 60000;

class HttpError extends Error {
  constructor(
    public readonly status: number,
    statusText: string,
    public readonly retryAfterMs?: number
  ) {
    super(`HTTP ${status} ${statusText}`);
  }
}

// 408/429 and 5xx are worth retrying; other non-2xx statuses won't fix themselves
function isRetryableStatus(status: number): boolean {
  return status === 408 || status === 429 || status >= 500;
}

function parseRetryAfter(header: string | null): number | undefined {
  if (!header) return undefined;
  const seconds = Number(header);
  if (Number.isFinite(seconds)) return seconds * 1000;
  const date = Date.parse(header);
  return Number.isNaN(date) ? undefined : Math.max(0, date - Date.now());
}

async function fetchTextWithRetry(url: string): Promise<string> {
  for (let attempt = 1; ; attempt++) {
    try {
      const response = await fetch(url, {
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      });
      if (!response.ok) {
        throw new HttpError(
          response.status,
          response.statusText,
          parseRetryAfter(response.headers.get("retry-after"))
        );
      }
      return await response.text();
    } catch (error) {
      // HttpError with a non-retryable status is permanent; anything else
      // (DNS failure, connection reset, timeout) is treated as transient
      const retryable =
        !(error instanceof HttpError) || isRetryableStatus(error.status);
      if (!retryable || attempt >= MAX_ATTEMPTS) {
        throw new Error(
          `Failed to download ${url} after ${attempt} attempt(s): ${
            error instanceof Error ? error.message : String(error)
          }`,
          { cause: error }
        );
      }

      const backoff = Math.min(MAX_DELAY_MS, BASE_DELAY_MS * 2 ** (attempt - 1));
      const jittered = backoff / 2 + Math.random() * (backoff / 2);
      const delay =
        error instanceof HttpError && error.retryAfterMs !== undefined
          ? Math.min(MAX_DELAY_MS, error.retryAfterMs)
          : jittered;
      process.stdout.write(
        `\n  attempt ${attempt} failed (${
          error instanceof Error ? error.message : String(error)
        }), retrying in ${Math.round(delay)}ms...`
      );
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}

export async function fetchDocument(docType: DocType): Promise<string> {
  process.stdout.write(`Downloading ${docType}...`);
  let html = await fetchTextWithRetry(DOC_URLS[docType]);

  // fix bug in first release of monster builder HTML
  if (docType === "5e_Monster_Builder") {
    html = html.replace(
      `  th.nowrap, td.nowrap {
    white-space: nowrap;
  table {max-width: 800px}`,
      `  th.nowrap, td.nowrap {
    white-space: nowrap;
  }
  table {max-width: 800px}`
    );
  }

  process.stdout.write("Done\n");

  return html;
}
