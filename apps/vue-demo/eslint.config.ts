import type { ConfigArray } from "@wpazderski/eslint-config/types.js";
import { createVueConfig } from "@wpazderski/eslint-config/vue.config.js";

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
export default createVueConfig({ withTurbo: true }) as ConfigArray;
