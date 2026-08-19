import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { catalog, componentCount } from '../src/data/catalog';

const indexSource = readFileSync(new URL('../src/pages/index.astro', import.meta.url), 'utf8');
const packageManifest = JSON.parse(
  readFileSync(new URL('../package.json', import.meta.url), 'utf8'),
) as { dependencies: Record<string, string>; devDependencies: Record<string, string> };
const workflow = readFileSync(new URL('../.github/workflows/pages.yml', import.meta.url), 'utf8');
const readSource = (path: string) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

describe('design system catalog', () => {
  const ids = catalog.flatMap((group) => group.items.map((item) => item.id));

  test('has a unique anchor for every catalog entry', () => {
    expect(componentCount).toBeGreaterThanOrEqual(40);
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) {
      expect(indexSource).toMatch(new RegExp(`<Section\\s+id=["']${id}["']`));
    }
  });

  test('retains all legacy showcase families', () => {
    const required = [
      'buttons',
      'tables',
      'badges',
      'dropdowns',
      'navbar',
      'alerts',
      'progress',
      'lists',
      'sorting',
      'panels',
      'forms',
      'steppers',
      'selects',
      'checks',
      'toggles',
      'timeline',
      'calendar',
      'pricing',
      'tabs',
      'breadcrumbs',
      'pagination',
      'accordion',
      'jumbotron',
      'carousel',
      'thumbnails',
      'modal',
      'media',
      'footer',
      'typography',
      'charts',
      'navigator',
      'exception',
      'editor',
      'upload',
    ];
    for (const id of required) expect(ids).toContain(id);
  });
});

describe('migration constraints', () => {
  test('ships only the intended lean dependency set', () => {
    expect(Object.keys(packageManifest.dependencies).sort()).toEqual(
      [
        '@astrojs/svelte',
        '@tailwindcss/vite',
        'astro',
        'lucide-svelte',
        'svelte',
        'tailwindcss',
      ].sort(),
    );
  });

  test('uses a complete GitHub Pages pipeline', () => {
    expect(workflow).toContain('bun install --frozen-lockfile');
    expect(workflow).toContain('bun run check');
    expect(workflow).toContain('bun run test');
    expect(workflow).toContain('bun run build');
    expect(workflow).toContain('bun run verify:dist');
    expect(workflow).toContain('actions/configure-pages@v6');
    expect(workflow).toContain('actions/upload-pages-artifact@v5');
    expect(workflow).toContain('actions/deploy-pages@v5');
  });
});

describe('form and overlay regressions', () => {
  test('uses theme-owned select and datepicker controls', () => {
    const select = readSource('src/components/forms/SelectField.svelte');
    const datepicker = readSource('src/components/forms/DatePicker.svelte');
    const field = readSource('src/components/forms/Field.svelte');
    const tagInput = readSource('src/components/forms/TagInput.svelte');

    expect(select).toContain('role="combobox"');
    expect(select).toContain('role="listbox"');
    expect(select).not.toContain('<select');
    expect(datepicker).toContain('new Intl.DateTimeFormat');
    expect(datepicker).toContain('const calendarDays = $derived.by');
    expect(field).toContain('padding-left:2.5rem');
    expect(tagInput).toContain("event.key === 'Tab'");
  });

  test('keeps floating menus visible and positions popovers from their trigger', () => {
    const example = readSource('src/components/docs/Example.astro');
    const section = readSource('src/components/docs/Section.astro');
    const globalStyles = readSource('src/styles/global.css');
    const dropdown = readSource('src/components/core/Dropdown.svelte');
    const popover = readSource('src/components/core/Popover.svelte');

    expect(example).toContain("flush ? 'overflow-hidden' : 'overflow-visible'");
    expect(section).not.toContain('catalog-section');
    expect(globalStyles).not.toContain('content-visibility');
    expect(dropdown).toContain('open:z-30');
    expect(popover).toContain('trigger.getBoundingClientRect()');
    expect(popover).toContain("window.addEventListener('scroll', reposition, true)");
  });
});

describe('rendering performance regressions', () => {
  test('pauses the hidden preloader', () => {
    const preloader = readSource('src/components/core/MaterialPreloader.svelte');

    expect(preloader).toContain(".material-preloader[aria-hidden='true'] .color");
    expect(preloader).toContain('animation-play-state: paused');
  });
});

describe('navigation roles', () => {
  test('keeps site navigation distinct from the application workspace', () => {
    const navbar = readSource('src/components/navigation/Navbar.svelte');
    const navigator = readSource('src/components/navigation/Navigator.svelte');

    expect(navbar).toContain('aria-label="Site navigation"');
    expect(navigator).toContain('aria-label="Travox application workspace"');
    expect(navigator).toContain('Workspace switcher');
    expect(navigator).toContain('Quick navigation');
  });
});
