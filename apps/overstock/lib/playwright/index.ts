import { Page } from "@playwright/test";

if (process.env.VERCEL_AUTOMATION_BYPASS_SECRET) {
  process.env.DEPLOYMENT_PROTECTION_BYPASS =
    process.env.VERCEL_AUTOMATION_BYPASS_SECRET;
}

/*
if (!process.env.DEPLOYMENT_PROTECTION_BYPASS) {
  throw new Error(`Missing DEPLOYMENT_PROTECTION_BYPASS`);
}
*/

export function maybeAddBypassHeader(page: Page) {
  page.setExtraHTTPHeaders({
    "x-vercel-protection-bypass":
      process.env.DEPLOYMENT_PROTECTION_BYPASS || "",
  });
}
