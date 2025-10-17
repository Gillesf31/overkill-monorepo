# Repository Guidelines

## Project Structure & Module Organization
This Nx workspace hosts Angular front-ends in `apps/todo-list` (port 4200) and `apps/user-management` (port 4201) with JSON Server stubs in `apps/back-end-todo-list/db.json` and `apps/backend-user-management/db.json`. Shared capabilities live in `libs/`, tagged by scope (`scope:todo-list`, `scope:user-management`, `scope:shared`) and type (`type:feature`, `type:facade`, `type:state`, `type:data-access`, `type:ui`, `type:util`, `type:routes`). Keep the dependency ladder feature → facade → state → data-access/util so `@nx/enforce-module-boundaries` stays green.

## Build, Test, and Development Commands
Install dependencies with `pnpm install` (enforced by `only-allow`). Run `pnpm nx serve todo-list` or `pnpm nx run todo-list:serve-with-api` to launch the todo UI with its mock API; swap the project name for `user-management` to work on that flow. Use `pnpm nx build <project>` for production bundles, and `pnpm nx lint <project>` / `pnpm nx test <project>` before submitting. Reach for `pnpm nx graph` when planning new libraries or dependency moves.

## Coding Style & Naming Conventions
TypeScript and template files use two-space indentation (`.editorconfig`) with Prettier enforcing single quotes, ES5 trailing commas, and a 160 character width. Run `pnpm nx format:check` (or `format:write`) to keep formatting consistent. Follow Angular selector prefixes (`overkill-monorepo-…`), colocate state, feature, and UI code inside their library folders, keep file names kebab-case, and continue the repo’s signal-first approach over legacy RxJS patterns.

## Testing Guidelines
Unit tests rely on Jest; place `*.spec.ts` files alongside the code they cover. Targets default to `passWithNoTests`, but new features should supply meaningful specs and exercise NGXS stores. Execute `pnpm nx test <project> --coverage` to mirror CI and add assertions for selectors, signals, and services touched by your change.

## Commit & Pull Request Guidelines
Commits follow Conventional Commit prefixes (`fix:`, `refactor:`, `feat:`) as seen in `git log`. Group related work per commit, keep subjects imperative, and include concise bodies when context is needed. For pull requests, link issues, summarise impacted apps/libs, attach UI screenshots or API samples when behaviour changes, and note the lint/tests/serve commands you ran so reviewers can reproduce quickly.

## Environment & Tooling Tips
Nx caches `build`, `lint`, and `test`; prefer `pnpm nx affected --target=<name>` after rebases to limit work. Angular env values live in `environment.ts`, so avoid hardcoding URLs outside the JSON servers. When editing mock data, keep schemas aligned across both back-end folders to prevent frontend desyncs.
