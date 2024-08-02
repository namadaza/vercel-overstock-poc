import { test, expect } from "@playwright/test";
import { maybeAddBypassHeader } from "../lib/playwright";

test.describe("example ecomm test", () => {
  test.beforeEach(async ({ page }) => {
    maybeAddBypassHeader(page);
  });

  test("should navigate to the home page", async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto("/");
    await expect(page).toHaveURL("/");
  });
});
