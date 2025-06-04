import { expect, test } from "@playwright/test";
import { PageUtils } from "@wpazderski/playwright-utils/PageUtils.js";

test.describe("playwright example", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
        PageUtils.pipeWebConsoleToStdout(page);
    });

    test("testing works", async ({ page }) => {
        const a = ["a", "b", "c"];
        expect(a).toContain("b");

        const pElement = page.locator("p.read-the-docs");
        await expect(pElement).toHaveText(/Click on the Vite and React logos to learn more/u);
    });
});
