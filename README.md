# Personal Blog

A personal blog built with Astro and deployed on Cloudflare Workers.

## Tech Stack

- **[Astro](https://astro.build/)** - Static site generator
- **[Cloudflare Workers](https://workers.cloudflare.com/)** - Deployment platform
- **[astro-icon](https://github.com/natemoo-re/astro-icon)** - Icon system with Iconify support
- **[@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/)** - MDX integration
- **[@fontsource-variable/inter](https://fontsource.org/)** - Inter variable font

## Commands

All commands are run from the root of the project:

| Command              | Action                                      |
| :------------------- | :------------------------------------------ |
| `pnpm install`       | Install dependencies                        |
| `pnpm dev`           | Start local dev server at `localhost:4321`  |
| `pnpm typecheck`     | Run Astro type checking                     |
| `pnpm build`         | Build production site to `./dist/`          |
| `pnpm preview`       | Preview build with Wrangler dev server      |
| `pnpm deploy`        | Deploy to Cloudflare Workers                |
| `pnpm deploy:preview`| Upload Wrangler version for preview         |
| `pnpm update:all`    | Update all dependencies to latest versions  |
