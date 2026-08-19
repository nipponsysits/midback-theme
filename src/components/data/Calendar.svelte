<script lang="ts">
  import Icon from '../core/Icon.svelte';
  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const days = Array.from({ length: 42 }, (_, index) => {
    const day = index - 4;
    return { label: day < 1 ? 31 + day : day > 31 ? day - 31 : day, muted: day < 1 || day > 31 };
  });
</script>

<div
  class="mx-auto max-w-md overflow-hidden rounded-panel border border-cloud-200 bg-white shadow-sm"
>
  <header class="flex items-center justify-between bg-slate-700 px-4 py-3 text-white">
    <button
      type="button"
      class="grid size-8 place-items-center rounded hover:bg-white/10"
      aria-label="Previous month"><Icon name="chevron-left" size={17} /></button
    >
    <h3 class="font-semibold">August 2026</h3>
    <button
      type="button"
      class="grid size-8 place-items-center rounded hover:bg-white/10"
      aria-label="Next month"><Icon name="chevron-right" size={17} /></button
    >
  </header>
  <div
    class="grid grid-cols-7 bg-cloud-100 px-3 pt-3 text-center text-xs font-bold uppercase tracking-wide text-slate-500"
  >
    {#each weekdays as weekday}<span class="py-2">{weekday}</span>{/each}
  </div>
  <div class="grid grid-cols-7 gap-1 p-3 pt-1 text-center text-sm">
    {#each days as day}
      <button
        type="button"
        disabled={day.muted}
        class="aspect-square rounded-full transition {day.muted
          ? 'text-cloud-300'
          : day.label === 19
            ? 'bg-brand-500 font-bold text-white'
            : 'text-slate-600 hover:bg-brand-100 hover:text-brand-800'}">{day.label}</button
      >
    {/each}
  </div>
</div>
