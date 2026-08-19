<script lang="ts">
  import Icon from '../core/Icon.svelte';

  let {
    id,
    label,
    value = '2026-08-21',
    hint,
    required = false,
  }: {
    id: string;
    label: string;
    value?: string;
    hint?: string;
    required?: boolean;
  } = $props();

  // svelte-ignore state_referenced_locally -- value intentionally seeds the initial calendar view
  const initial = value.split('-').map(Number);
  let root: HTMLDivElement;
  let trigger: HTMLButtonElement;
  let open = $state(false);
  // svelte-ignore state_referenced_locally -- value intentionally seeds component-local selection
  let selected = $state(value);
  let viewYear = $state(initial[0] ?? 2026);
  let viewMonth = $state((initial[1] ?? 8) - 1);

  const monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' });
  const dateFormatter = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const monthLabel = $derived(monthFormatter.format(new Date(viewYear, viewMonth, 1)));
  const displayValue = $derived(dateFormatter.format(parseDate(selected)));
  const calendarDays = $derived.by(() => {
    const first = new Date(viewYear, viewMonth, 1);
    const mondayOffset = (first.getDay() + 6) % 7;
    return Array.from({ length: 42 }, (_, index) => {
      const date = new Date(viewYear, viewMonth, index - mondayOffset + 1);
      return {
        date,
        iso: toIso(date),
        currentMonth: date.getMonth() === viewMonth,
      };
    });
  });

  function parseDate(iso: string) {
    const [year, month, day] = iso.split('-').map(Number);
    return new Date(year ?? 2026, (month ?? 1) - 1, day ?? 1);
  }

  function toIso(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function changeMonth(offset: number) {
    const next = new Date(viewYear, viewMonth + offset, 1);
    viewYear = next.getFullYear();
    viewMonth = next.getMonth();
  }

  function choose(date: Date) {
    selected = toIso(date);
    viewYear = date.getFullYear();
    viewMonth = date.getMonth();
    open = false;
    requestAnimationFrame(() => trigger.focus());
  }
</script>

<svelte:window
  onclick={(event) => {
    if (open && !root?.contains(event.target as Node)) open = false;
  }}
/>

<div bind:this={root} class="relative">
  <span id={`${id}-label`} class="mb-1.5 block text-sm font-semibold text-slate-700">
    {label}{#if required}<span class="ml-1 text-grapefruit-500" aria-hidden="true">*</span>{/if}
  </span>
  <button
    bind:this={trigger}
    type="button"
    aria-labelledby={`${id}-label ${id}-value`}
    aria-controls={`${id}-calendar`}
    aria-expanded={open}
    aria-haspopup="dialog"
    aria-describedby={hint ? `${id}-hint` : undefined}
    class="control-base flex items-center justify-between gap-3 text-left"
    onclick={() => (open = !open)}
    onkeydown={(event) => {
      if (event.key === 'Escape') open = false;
    }}
  >
    <span id={`${id}-value`}>{displayValue}</span>
    <Icon name="calendar" size={16} class="shrink-0 text-slate-500" />
  </button>

  {#if open}
    <div
      id={`${id}-calendar`}
      role="dialog"
      aria-modal="false"
      aria-label="Choose a departure date"
      class="absolute left-0 z-40 mt-2 w-[min(20rem,calc(100vw-3rem))] overflow-hidden rounded-panel border border-cloud-200 bg-white shadow-panel"
    >
      <header
        class="flex items-center justify-between border-b border-cloud-200 bg-cloud-50 px-3 py-2.5"
      >
        <button
          type="button"
          class="grid size-8 place-items-center rounded-control text-slate-600 hover:bg-cloud-200"
          aria-label="Previous month"
          onclick={() => changeMonth(-1)}><Icon name="chevron-left" size={16} /></button
        >
        <h3 class="text-sm font-semibold text-slate-800">{monthLabel}</h3>
        <button
          type="button"
          class="grid size-8 place-items-center rounded-control text-slate-600 hover:bg-cloud-200"
          aria-label="Next month"
          onclick={() => changeMonth(1)}><Icon name="chevron-right" size={16} /></button
        >
      </header>
      <div
        class="grid grid-cols-7 px-3 pt-3 text-center text-xs font-bold uppercase tracking-wide text-slate-400"
      >
        {#each weekdays as weekday}<span class="py-1.5">{weekday}</span>{/each}
      </div>
      <div class="grid grid-cols-7 gap-1 p-3 pt-1">
        {#each calendarDays as day}
          <button
            type="button"
            aria-label={dateFormatter.format(day.date)}
            aria-pressed={day.iso === selected}
            class="grid aspect-square place-items-center rounded-full text-xs transition {day.iso ===
            selected
              ? 'bg-brand-500 font-bold text-white'
              : day.currentMonth
                ? 'text-slate-700 hover:bg-brand-100 hover:text-brand-800'
                : 'text-slate-300 hover:bg-cloud-100'}"
            onclick={() => choose(day.date)}>{day.date.getDate()}</button
          >
        {/each}
      </div>
      <footer
        class="flex items-center justify-between border-t border-cloud-200 bg-cloud-50 px-3 py-2"
      >
        <button
          type="button"
          class="rounded-control px-2 py-1 text-xs font-semibold text-bluejeans-500 hover:bg-bluejeans-400/10"
          onclick={() => {
            const today = new Date();
            choose(today);
          }}>Today</button
        >
        <button
          type="button"
          class="rounded-control px-2 py-1 text-xs font-semibold text-slate-500 hover:bg-cloud-200"
          onclick={() => (open = false)}>Close</button
        >
      </footer>
    </div>
  {/if}

  <input type="hidden" name={id} value={selected} {required} />
  {#if hint}<p id={`${id}-hint`} class="mt-1.5 text-xs text-slate-500">{hint}</p>{/if}
</div>
