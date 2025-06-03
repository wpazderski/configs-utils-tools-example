import { createNextJsConfig } from "@wpazderski/eslint-config/nextJs.config.js";
import type { ConfigArray } from "@wpazderski/eslint-config/types.js";

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
export default createNextJsConfig({ withTurbo: true }) as ConfigArray;
