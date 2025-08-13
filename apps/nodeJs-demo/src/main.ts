/* eslint-disable no-console */
import { StringUtils } from "@wpazderski/js-utils";
import { TimeoutScheduler } from "@wpazderski/js-utils/common/schedulers/TimeoutScheduler.js";
import { PathUtils } from "@wpazderski/js-utils/node";

const rawDirPath = "/lorem/ipsum\\dolor/sit\\amet";
const sanitizedDirPath = PathUtils.sanitizeDirPath(rawDirPath);
console.log({ rawDirPath, sanitizedDirPath });

const camelCaseStr = "loremIpsumDolorSitAmet";
const kebabCaseStr = StringUtils.camelCaseToKebabCase(camelCaseStr);
console.log({ camelCaseStr, kebabCaseStr });

TimeoutScheduler.singleShot(
    () => {
        console.log("TimeoutScheduler single shot executed");
    },
    { delayMsec: 1000 },
);

const lines: string[] = [];

const usage = process.cpuUsage();
const systemUsage = usage.system;
const userUsage = usage.user;

lines.push("Hello world!");
lines.push(`    System CPU usage: ${systemUsage.toString()} microseconds`);
lines.push(`    User CPU usage: ${userUsage.toString()} microseconds`);

console.log(lines.join("\n"));
