<script lang="ts">
  import Icon from '../core/Icon.svelte';
  const items = [
    {
      title: 'What changed from the original theme?',
      body: 'Bootstrap, jQuery, Vue 2, Bower, Grunt, Font Awesome, and duplicated vendor bundles were replaced by Astro, Svelte, Tailwind CSS 4, Lucide, and native browser controls.',
    },
    {
      title: 'Can components work without JavaScript?',
      body: 'Most components render as static HTML. Dropdowns and accordions use details; modals use dialog; forms use native controls. Only stateful enhancements hydrate.',
    },
    {
      title: 'Is it ready for GitHub Pages?',
      body: 'Yes. The build is static and the included workflow checks, builds, uploads, and deploys the dist directory.',
    },
  ];
</script>

<div
  class="divide-y divide-cloud-200 overflow-hidden rounded-panel border border-cloud-200 bg-white"
>
  {#each items as item, index}
    <details class="group" open={index === 0}>
      <summary
        class="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 font-semibold text-slate-700 hover:bg-cloud-50 [&::-webkit-details-marker]:hidden"
        >{item.title}<Icon
          name="chevron-down"
          size={17}
          class="shrink-0 transition group-open:rotate-180"
        /></summary
      >
      <p class="px-4 pb-4 text-sm text-slate-500">{item.body}</p>
    </details>
  {/each}
</div>
