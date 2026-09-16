# The Thinking Space

[The Thinking Space](https://the-thinking-space-app.netlify.app/)

## Features

- Logic puzzles and Excel exercises across three difficulty levels
- Editable cells, formulas, automatic calculations, and copy/paste
- Step-by-step hints, explanations, and exercise checks
- Bookmarks and progress saved in the browser
- English, Polish, Russian, and Chinese language options

The mini spreadsheet supports selected functions for the exercises; it is not a full Excel replacement.

## Built with

React, TypeScript, and Vite. No backend or account required.

## Run locally

Use Node.js 22 and pnpm (version pinned in `package.json`).

```sh
pnpm install
pnpm dev
```

```sh
pnpm test
pnpm build
```

Browser tests are also available with `pnpm test:e2e` after installing Playwright Chromium.
