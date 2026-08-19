# Migration notes

## Architecture

Legacy repository เป็น theme bundle ที่ประกอบ CSS/JavaScript ด้วย Grunt และเก็บ source ของ dependency ทั้งหมดไว้ใน `bower_components/` กว่า 2,000 ไฟล์ หน้า `bootstrap-test.html` เป็นแหล่งอ้างอิงหลักของ component และ `sources/app-scss/` เพิ่ม Travox-specific navigator, table, exception dialog, select, editor และ graph styles

เวอร์ชัน 2 ย้ายเป็น Astro static site โดย render component ส่วนใหญ่บน build server และส่ง client JavaScript เฉพาะ interaction ที่ต้องเก็บ state

## Dependency replacement matrix

| Legacy dependency                                | Resolution | Replacement/reason                                                                                      |
| ------------------------------------------------ | ---------- | ------------------------------------------------------------------------------------------------------- |
| Bower + Grunt plugins                            | Removed    | Bun scripts + Astro/Vite build                                                                          |
| Bootstrap 3 + Bootflat                           | Removed    | Tailwind CSS 4 utilities and project tokens                                                             |
| jQuery                                           | Removed    | DOM/native HTML behavior                                                                                |
| Vue 2                                            | Removed    | Svelte 5 for small interactive islands                                                                  |
| Font Awesome + Glyphicons                        | Removed    | `lucide-svelte` SVG components                                                                          |
| Moment                                           | Removed    | `Intl.DateTimeFormat` and native date/time inputs                                                       |
| Axios + Q                                        | Removed    | Native `fetch` and promises when application integration needs them                                     |
| Lodash                                           | Removed    | Native array, object, and collection methods                                                            |
| domurl                                           | Removed    | Native `URL` and `URLSearchParams`                                                                      |
| localForage                                      | Removed    | No storage required by the static design system; use IndexedDB/localStorage directly in a consuming app |
| JavaScript-MD5                                   | Removed    | No insecure MD5 use; consumers should use Web Crypto with an appropriate algorithm                      |
| capslockstate plugin                             | Removed    | `KeyboardEvent.getModifierState('CapsLock')`                                                            |
| vue-html-editor + Summernote                     | Removed    | `contenteditable` with Selection/Range APIs                                                             |
| vue-upload-component                             | Removed    | Native file input and drag/drop events                                                                  |
| vue-dnd + vue-sortable + Sortable                | Removed    | Native drag/drop sortable component with keyboard/touch move controls                                   |
| vue-select                                       | Removed    | Theme-aligned Svelte dropdown plus focused tag input                                                    |
| flatpickr                                        | Removed    | Lightweight Svelte datepicker built on native `Date`/`Intl` APIs                                        |
| Push.js                                          | Removed    | Design system does not request notification permission; consumers can use the Notification API          |
| material-preloader + progressbar.js              | Removed    | CSS progress and spinner components                                                                     |
| Chart.js + horizontal-bar extension + Highcharts | Removed    | Responsive native SVG chart component                                                                   |
| socket.io-client                                 | Removed    | Transport is application-level, not a design-system concern                                             |
| Chai + chai-http                                 | Removed    | Bun’s built-in test runner                                                                              |
| html5shiv + Respond.js + console normalizer      | Removed    | Modern browser support target                                                                           |
| Fuse.js                                          | Removed    | No fuzzy search shipped; small catalogs use native filtering                                            |

## Visual continuity

- Primary Travox green remains `#78BB34`.
- The complete Bootflat color pairs are available as Tailwind theme tokens.
- Compact controls, flat color fields, modest radii, strong panel headers, and operational table density remain recognizable.
- Spacing now follows a consistent 4 px-derived scale with 40 px default controls and clearer section rhythm.
- System UI fonts replace bundled font files and improve Thai/Latin rendering without a font download.

## Removed repository artifacts

- `bower_components/`
- `sources/` vendor copies, icon fonts, legacy JavaScript, and SCSS build output
- `bower.json`
- `Gruntfile.js`
- `_config.yml`
- `bootstrap-test.html`

Their component intent is represented in `src/data/catalog.ts` and the Svelte/Astro showcase.
