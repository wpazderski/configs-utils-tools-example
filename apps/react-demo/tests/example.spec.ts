import { expect, test } from "@playwright/test";

test.describe("playwright example", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test("testing works", async ({ page }) => {
        const a = ["a", "b", "c"];
        expect(a).toContain("b");

        const pElement = page.locator("p.read-the-docs");
        await expect(pElement).toHaveText(/Click on the Vite and React logos to learn more/u);
    });
});
