import { createBaseConfig } from "@wpazderski/eslint-config/base.config.js";
import type { ConfigArray } from "@wpazderski/eslint-config/types.js";

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
export default createBaseConfig({
    globalIgnores: ["apps/"],
    withTurbo: true,
    withPrettier: true,
}) as ConfigArray;
