<script lang="ts">
  import Icon from './Icon.svelte';

  let {
    label = 'Actions',
    variant = 'default',
  }: {
    label?: string;
    variant?: 'default' | 'primary';
  } = $props();

  const trigger = {
    default: 'border-cloud-300 bg-white text-slate-700 hover:border-slate-400',
    primary: 'border-aqua-500 bg-aqua-500 text-white hover:border-aqua-400 hover:bg-aqua-400',
  };
</script>

<details class="group relative inline-block open:z-30">
  <summary
    class="flex min-h-9 cursor-pointer list-none items-center gap-2 rounded-control border px-4 text-sm font-semibold shadow-sm [&::-webkit-details-marker]:hidden {trigger[
      variant
    ]}"
  >
    {label}<Icon name="chevron-down" size={15} class="transition-transform group-open:rotate-180" />
  </summary>
  <div
    class="absolute left-0 z-40 mt-2 min-w-48 overflow-hidden rounded-panel border border-cloud-200 bg-white py-1 shadow-panel"
  >
    <a href="#forms" class="block px-3 py-2 text-sm text-slate-700 hover:bg-cloud-100"
      >Edit record</a
    >
    <a href="#tables" class="block px-3 py-2 text-sm text-slate-700 hover:bg-cloud-100">Duplicate</a
    >
    <div class="my-1 border-t border-cloud-200"></div>
    <a href="#alerts" class="block px-3 py-2 text-sm text-[#c0392b] hover:bg-cloud-100">Delete</a>
  </div>
</details>
