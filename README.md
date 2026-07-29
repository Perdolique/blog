# Personal Blog

A personal blog built with Astro and deployed on Cloudflare Workers.

## Tech Stack

- **[Astro](https://astro.build/)** - Static site generator
- **[Cloudflare Workers](https://workers.cloudflare.com/)** - Deployment platform
- **[astro-icon](https://github.com/natemoo-re/astro-icon)** - Icon system with Iconify support
- **[@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/)** - MDX integration

## Commands

All commands are run from the root of the project:

| Command                 | Action                                      |
| :---------------------- | :------------------------------------------ |
| `vp install`            | Install dependencies                        |
| `vp run dev`            | Start local dev server at `localhost:4321`  |
| `vp run test:typecheck` | Run Astro type checking                     |
| `vp run build`          | Build production site to `./dist/`          |
| `vp run preview`        | Preview build with Wrangler dev server      |
| `vp run deploy`         | Deploy to Cloudflare Workers                |
| `vp run deploy:preview` | Upload Worker version for preview           |
| `vp run update:all`     | Update dependencies to latest versions      |
