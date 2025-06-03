import os from "os";
import { defineConfig, devices } from "@playwright/test";
import type { ViewportSize } from "@playwright/test";

const viewport: ViewportSize = {
    width: 1920,
    height: 1080,
};

const isCi = Boolean(process.env["CI"]);
const port = process.env["PORT"] ?? "3102";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    testDir: "./tests",
    fullyParallel: true,
    forbidOnly: Boolean(isCi),
    retries: isCi ? 2 : 0,
    workers: isCi ? 1 : os.cpus().length,
    reporter: [
        [
            "html",
            {
                open: "never",
            },
        ],
    ],
    use: {
        baseURL: `http://localhost:${port}`,
        trace: "on-first-retry",
        testIdAttribute: "data-test-id",
        viewport: viewport,
    },

    projects: [
        {
            name: "chromium",
            use: {
                ...devices["Desktop Chrome"],
                viewport,
            },
        },
        {
            name: "firefox",
            use: {
                ...devices["Desktop Firefox"],
                viewport,
            },
        },
        {
            name: "webkit",
            use: {
                ...devices["Desktop Safari"],
                viewport,
            },
        },
    ],
    webServer: {
        command: "pnpm run start-test-server",
        url: `http://localhost:${port}`,
        reuseExistingServer: !isCi,
    },
});
