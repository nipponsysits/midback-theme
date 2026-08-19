<script lang="ts">
  import Icon from '../core/Icon.svelte';
  import type { IconName } from '../core/icon-types';
  let {
    label,
    value,
    change,
    direction = 'up',
    icon = 'gauge',
  }: {
    label: string;
    value: string;
    change: string;
    direction?: 'up' | 'down';
    icon?: IconName;
  } = $props();
</script>

<article class="surface-panel p-5">
  <div class="flex items-start justify-between gap-3">
    <div>
      <p class="text-sm text-slate-500">{label}</p>
      <p class="mt-1 text-3xl font-semibold tracking-tight text-slate-800">{value}</p>
    </div>
    <span class="grid size-10 place-items-center rounded-panel bg-brand-100 text-brand-700"
      ><Icon name={icon} size={20} /></span
    >
  </div>
  <p class="mt-4 text-xs text-slate-500">
    <span class="font-semibold {direction === 'up' ? 'text-grass-500' : 'text-grapefruit-500'}"
      >{direction === 'up' ? '↑' : '↓'} {change}</span
    > from last month
  </p>
</article>
