# Node.js Typescript Monorepo Boilerplate

This is a sample client / server monorepo project that uses:

* [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces)
* [eslint](https://eslint.org/)
* [typescript](https://www.typescriptlang.org/)
* [jest](https://jestjs.io/)
* [GitHub Actions](https://docs.github.com/en/actions)

The [server](packages/server/README.md) is a sample Server Side Events server to stream events to a Node.js [client](packages/client/README.md).

## Setup

* `npm install`

## Target Workspaces

Use one package, e.g.:
`npm run echo --workspace=@sse/server`

Use all packages:

`npm run echo --workspaces`

## Package Dependencies

Packages can depend on each other.  E.g.

`package.json` specify name of package in `dependencies`:

```json
  "dependencies": {
    "@sse/common": "1.0.0"
  },
```

`tsconfig.json` specify relative path of package __folder__ name

```json
  "references": [{ "path": "../common" }]
```

## Build

`npm run build`

## Test

* `npm test`
