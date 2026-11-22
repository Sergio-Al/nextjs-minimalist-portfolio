# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager: **pnpm** (a `pnpm-lock.yaml` is checked in — do not mix with `npm` or `yarn`).

- `pnpm dev` — start the Next.js dev server
- `pnpm build` — production build (`next build`)
- `pnpm start` — serve the production build
- `pnpm lint` — run `next lint` (config in `.eslintrc.json` extends `next/core-web-vitals`)

There is no test suite configured.

## Architecture

Next.js 14 App Router project (React 18, TypeScript strict). Single-page resume/portfolio at `/` plus an MDX-backed blog at `/blog`.

**Single source of truth for content.** `src/data/resume.tsx` exports a `DATA` object consumed by `src/app/layout.tsx` (metadata) and `src/app/page.tsx` (which passes it as a prop to every section in `src/sections/`). To change name, bio, work, education, projects, skills, navbar, or social links, edit this file — not the section components. `DATA.url` is the base for `metadataBase` and OG image URLs, so it must be a real production URL for SEO/social previews to work.

**Page composition.** `src/app/page.tsx` is the only place that assembles sections (`Hero`, `About`, `Experience`, `Education`, `Skills`, `Projects`, `Contact`). Each section receives `DATA` and a shared `BLUR_FADE_DELAY` constant used to stagger entrance animations via `src/components/magicui/blur-fade.tsx` (a Framer Motion wrapper). Keep new sections to the same `(DATA, BLUR_FADE_DELAY)` prop shape.

**Blog pipeline.** `src/data/blog.ts` reads `.mdx` files directly from the top-level `content/` directory at request time using Node's `fs` (so blog pages must remain server components). The pipeline is `gray-matter` for frontmatter → `unified`/`remark-parse` → `remark-rehype` → `rehype-pretty-code` (Shiki themes `min-light`/`min-dark`, `keepBackground: false`) → `rehype-stringify`. The resulting HTML string is injected via `dangerouslySetInnerHTML` in `src/app/blog/[slug]/page.tsx` and styled with the `prose` classes from `@tailwindcss/typography`. `generateStaticParams` enumerates posts at build time. Frontmatter must include `title`, `publishedAt`, and `summary` (optional `image`); to add a post, drop a new `.mdx` file in `content/`.

Note: `src/components/mdx.tsx` exports a `globalComponents` map for `@mdx-js/react`-style rendering, but the current blog renderer uses the HTML-string pipeline above and does not consume it. New MDX features should extend the `unified` pipeline in `src/data/blog.ts`.

**UI layer.** shadcn/ui (config in `components.json`, style `new-york`, base color `neutral`, alias `@/components`, utils `@/lib/utils`) for primitives in `src/components/ui/`. Custom animation components live in `src/components/magicui/`. Theming uses `next-themes` via `src/components/theme-provider.tsx` wired in `layout.tsx` with `defaultTheme="light"`; Tailwind dark mode is `class`-based. Path alias `@/*` → `src/*`.

## Conventions

- Section files in `src/sections/` (PascalCase) are the only consumers of `DATA` besides `layout.tsx` and `page.tsx`. Reusable presentational pieces go in `src/components/`.
- Tailwind `content` globs cover `pages/`, `components/`, `app/`, and `src/`. The active source root is `src/` — the other globs are leftover from the shadcn template and safe to keep.
- The project is adapted from [dillionverma/portfolio](https://github.com/dillionverma/portfolio); when borrowing patterns, prefer the local conventions (sections split out, `DATA`-as-prop) over the upstream layout.
