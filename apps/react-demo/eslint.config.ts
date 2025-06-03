import { createReactConfig } from "@wpazderski/eslint-config/react.config.js";
import type { ConfigArray } from "@wpazderski/eslint-config/types.js";

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
export default createReactConfig({ withPlaywright: true, withTurbo: true }) as ConfigArray;
