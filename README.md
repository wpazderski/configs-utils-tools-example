# configs-example-project

This project is an example that shows how to use configs:

- [@wpazderski/prettier-config](https://github.com/wpazderski/prettier-config),
- [@wpazderski/eslint-config](https://github.com/wpazderski/eslint-config),
- [@wpazderski/typescript-config](https://github.com/wpazderski/typescript-config).

## Installation and usage

Start by installing dependencies, for example with `pnpm`:

```sh
pnpm install
```

Then `cd` into one of subprojects (located in `apps/`) and start it:

```sh
pnpm run dev
```

You can also run all subprojects by executing the above command in the root directory.

## Available subprojects (apps)

- Node.js (`./apps/nodeJs/`),
- React (`./apps/react/`; port: `3102`),
- Angular (`./apps/angular/`; port: `3103`),
- Vue (`./apps/react/`; port: `3104`),
- Next.js (`./apps/react/`; port: `3105`),
