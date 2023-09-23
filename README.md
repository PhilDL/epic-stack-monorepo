<div align="center">
  <h1 align="center"><a href="https://www.epicweb.dev/epic-stack">The Epic Stack Monorepo 🚀</a></h1>
  <strong align="center">
    Ditch analysis paralysis and start shipping Epic Web apps.
  </strong>
  <p>
    This is an opinionated project starter and reference that allows teams to
    ship their ideas to production faster and on a more stable foundation based
    on the experience of <a href="https://kentcdodds.com">Kent C. Dodds</a> and
    <a href="https://github.com/epicweb-dev/epic-stack/graphs/contributors">contributors</a>.
  </p>
</div>

## Epic Stack Monorepo Example

This monorepo was created with `pnpm` for space efficiency and more convienence
in monorepos than `npm`. On top of that package manager the monorepo pipeline
tool of choice is turborepo (feel free to switch it for NX).

- `apps` Folder containing the applications
  - [`epic-app`](https://github.com/PhilDL/epic-stack-monorepo/tree/main/apps/epic-app):
    the [Remix.run](https://remix.run) Epic Stack app.
- `packages` Folder containing examples

  - [`ui`](https://github.com/PhilDL/epic-stack-monorepo/tree/main/packages/ui):
    this UI package contains the [shadcn/ui](https://ui.shadcn.com/) Component
    previously in the Epic Stack App. It also exposes a Tailwind config
    "epic-stack" preset, that you consume from the Remix app.
  - [`client-hints`](https://github.com/PhilDL/epic-stack-monorepo/tree/main/packages/client-hints):
    is an example package that takes the original functions and hooks handling
    client-hints in the `utils` folder of the original app, and put that into
    their own package.
    [`The hooks`](https://github.com/PhilDL/epic-stack-monorepo/tree/main/packages/client-hints/src/client-hints.tsx):
    were refactored to take "loader" as generics (typically the root loader).
  - Some config packages:
    - eslint containing some common eslint configs.
    - tsconfig presets.

## Local development

> **Warning** All the following commands should be launched from the **monorepo
> root directory**

### Install dependencies

```bash
pnpm i
```

Given the name of our app in `package.json` is `@epic-stack-monorepo/epic-app`:

Turborepo is used here to have pipeline between packages. The setup here is
basic, and you can see turbo as just a way to run the same `pnpm` command in all
packages, for example:

### Build all packages

```bash
pnpm build
```

### Dev all packages

```bash
pnpm dev
```

All turborepo // pnpm commands can be filtered to a specific package with the
`--filter` flag. For example:

### To Work on the Remix Epic Stack app

```bash
pnpm dev --filter=@epic-stack-monorepo/epic-app
```

You could also use `...` to run dev also on all the workspace packages deps:

```bash
pnpm dev --filter=@epic-stack-monorepo/epic-app...
```

(This will also run the dev command on `@epic-stack-monorepo/client-hints` and
`@epic-stack-monorepo/ui`).

## Install package in a specific package

```bash
pnpm add -D chokidar --filter=@epic-stack-monorepo/ui
```

This will install `chokidar` in the `@epic-stack-monorepo/ui` package.

# Original documentation

```sh
npx create-remix@latest --install --init --git-init --template epicweb-dev/epic-stack
```

[![The Epic Stack](https://github-production-user-asset-6210df.s3.amazonaws.com/1500684/246885449-1b00286c-aa3d-44b2-9ef2-04f694eb3592.png)](https://www.epicweb.dev/epic-stack)

[The Epic Stack](https://www.epicweb.dev/epic-stack)

<hr />

## Watch Kent's Introduction to The Epic Stack

[![screenshot of a YouTube video](https://github-production-user-asset-6210df.s3.amazonaws.com/1500684/242088051-6beafa78-41c6-47e1-b999-08d3d3e5cb57.png)](https://www.youtube.com/watch?v=yMK5SVRASxM)

["The Epic Stack" by Kent C. Dodds at #RemixConf 2023 💿](https://www.youtube.com/watch?v=yMK5SVRASxM)

## Docs

[Read the docs](https://github.com/epicweb-dev/epic-stack/blob/main/docs)
(please 🙏).

## Support

- 🆘 Join the
  [discussion on GitHub](https://github.com/epicweb-dev/epic-stack/discussions)
  and the [KCD Community on Discord](https://kcd.im/discord).
- 💡 Create an
  [idea discussion](https://github.com/epicweb-dev/epic-stack/discussions/new?category=ideas)
  for suggestions.
- 🐛 Open a [GitHub issue](https://github.com/epicweb-dev/epic-stack/issues) to
  report a bug.

## Branding

Want to talk about the Epic Stack in a blog post or talk? Great! Here are some
assets you can use in your material:
[EpicWeb.dev/brand](https://epicweb.dev/brand)

## Thanks

You rock 🪨
