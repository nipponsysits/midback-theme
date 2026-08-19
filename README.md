# Travox MidBack Design System

[![Check and deploy GitHub Pages](https://github.com/nipponsysits/midback-theme/actions/workflows/pages.yml/badge.svg)](https://github.com/nipponsysits/midback-theme/actions/workflows/pages.yml)

ระบบออกแบบของ Travox MidBack ที่ย้ายจาก Bower, Grunt, Bootstrap 3, Bootflat, jQuery และ Vue 2 มาเป็น static site สมัยใหม่ โดยคงโทนสี รูปทรง และความหนาแน่นของหน้าจอเดิมไว้ พร้อมปรับ spacing, accessibility และ responsive layout ให้สม่ำเสมอขึ้น

**Website:** [nipponsysits.github.io/midback-theme](https://nipponsysits.github.io/midback-theme/)

## Tech stack

- Astro 7 — static-first shell และ GitHub Pages output
- Svelte 5 — hydrate เฉพาะ component ที่มี state จริง
- Tailwind CSS 4 — CSS-first design tokens ผ่าน first-party Vite plugin
- Lucide Svelte — SVG icon แบบ tree-shake แทน Font Awesome/Glyphicons
- Bun — package manager, test runner และ local workflow

ไม่มี Bootstrap, jQuery, Vue 2, Moment, Axios, Lodash, Font Awesome, icon font หรือ browser polyfill เก่าค้างอยู่ใน production bundle

## Commands

```bash
bun install
bun run dev
bun run check
bun run test
bun run build
bun run preview
```

`bun run validate` รัน type/Svelte/Astro checks, tests และ production buildต่อกันเหมือน quality gate ใน CI

## Structure

```text
src/
├── components/
│   ├── core/        # buttons, badges, alerts, icons, progress, overlays
│   ├── data/        # table, list, stats, charts, calendar, timeline
│   ├── docs/        # design-system documentation surfaces
│   ├── forms/       # native inputs plus focused Svelte enhancements
│   ├── navigation/  # navbar, Travox navigator, tabs, pagination
│   └── surfaces/    # panels, pricing, carousel, modal, footer
├── data/catalog.ts  # authoritative component catalog
├── layouts/
├── pages/index.astro
└── styles/global.css
```

Design tokens อยู่ใน `src/styles/global.css` ด้วย Tailwind CSS 4 `@theme` ส่วน component ใช้ utility classes โดยตรง เพื่อให้ compiler ตัด CSS ที่ไม่ใช้ออกได้

## Component coverage

หน้า design system ครอบคลุม component ใน legacy showcase ทั้งหมด:

- Foundations: color, typography, icons
- Actions: buttons, button groups, dropdowns
- Forms: inputs, textarea, native select, tag input, checkbox, radio, toggle, stepper, editor, file upload
- Feedback: alerts, labels, badges, progress, spinner, tooltips, popovers, exception dialog
- Navigation: navbar, Travox app navigator, tabs, pills, breadcrumbs, pagination, pager
- Data display: tables, lists, drag/drop sorting, stats, SVG charts, timeline, calendar, media list
- Surfaces: panels, wells, thumbnails, pricing, jumbotron, carousel, accordion, modal, footer

รายละเอียดการแทน dependency เดิมอยู่ใน [Migration notes](docs/MIGRATION.md)

## Native-first behavior

- Dropdown/accordion: `<details>` และ `<summary>`
- Modal/exception: `<dialog>`
- Popover: HTML Popover API
- Carousel: CSS scroll snap
- Time, number, checkbox, radio และ upload: native form controls
- Datepicker และ select: lightweight Svelte components ที่ใช้ native Date/keyboard APIs
- Editor: `contenteditable` + Selection/Range APIs
- Charts: responsive SVG

component ที่เป็น static จะไม่มี client JavaScript ส่วน component ที่มี state ใช้ Astro hydration directive แบบ `client:visible` หรือ `client:idle`

## GitHub Pages

Workflow `.github/workflows/pages.yml` จะรันเมื่อ push เข้า `master`/`main`, เมื่อเปิด pull request และเมื่อกด manual dispatch:

1. install จาก `bun.lock` แบบ frozen
2. type/component checks
3. tests
4. production build
5. upload และ deploy `dist/` เมื่อไม่ใช่ pull request

Repository นี้ deploy ที่ `https://nipponsysits.github.io/midback-theme/` โดย `astro.config.mjs` ใส่ base path เฉพาะตอนรันใน GitHub Actions ทำให้ local development ยังเปิดจาก `/` ได้ตามปกติ

ตั้งค่า GitHub repository ที่ **Settings → Pages → Source → GitHub Actions** หนึ่งครั้ง แล้ว workflow จะ deploy ให้อัตโนมัติ

## Browser support

Tailwind CSS 4 และ native primitives ชุดนี้ตั้งเป้า modern evergreen browsers: Chrome 111+, Safari 16.4+ และ Firefox 128+. ไม่มี IE polyfills หรือ legacy icon fonts
