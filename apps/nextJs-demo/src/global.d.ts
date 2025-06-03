/* eslint-disable import/no-default-export */

declare module "*.css" {
    const classes: Readonly<Record<string, string>>;
    export default classes;
}
