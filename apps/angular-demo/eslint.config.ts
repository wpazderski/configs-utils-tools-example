import { createAngularConfig } from "@wpazderski/eslint-config/angular.config.js";
import type { ConfigArray } from "@wpazderski/eslint-config/types.js";

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
export default createAngularConfig({ withTurbo: true }) as ConfigArray;
