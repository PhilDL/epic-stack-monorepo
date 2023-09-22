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

This monorepo was created with `pnpm` for space efficiency and more convienence
in monorepos than `npm`.

## Local development

All the following commands are run from the root of the monorepo.

### Install dependencies

```bash
pnpm i
```

Given the name of our app in `package.json` is `@epic-stack-monorepo/epic-app`:

### Build all packages

```bash
pnpm run --filter @epic-stack-monorepo/epic-app build
```

### Dev epic-stack app

```bash
pnpm run --filter @epic-stack-monorepo/epic-app dev
```
