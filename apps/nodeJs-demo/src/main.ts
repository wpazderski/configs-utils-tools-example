/* eslint-disable no-console */

const lines: string[] = [];

const usage = process.cpuUsage();
const systemUsage = usage.system;
const userUsage = usage.user;

lines.push("Hello world!");
lines.push(`    System CPU usage: ${systemUsage.toString()} microseconds`);
lines.push(`    User CPU usage: ${userUsage.toString()} microseconds`);

console.log(lines.join("\n"));
