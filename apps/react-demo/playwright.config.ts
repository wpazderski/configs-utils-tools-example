import type { PlaywrightTestConfig } from "@playwright/test";
import { getBasePlaywrightConfig } from "@wpazderski/playwright-config/base.config.js";

const isCi = Boolean(process.env["CI"]);
const port = process.env["PORT"] ?? "3102";

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
export default getBasePlaywrightConfig({
    isCi: isCi,
    webServerUrl: `http://localhost:${port}`,
    testDir: "./tests",
}) as PlaywrightTestConfig;
