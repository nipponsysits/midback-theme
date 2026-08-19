<script lang="ts">
  import Icon from '../core/Icon.svelte';

  let {
    id,
    label,
    options,
    hint,
    disabled = false,
  }: {
    id: string;
    label: string;
    options: string[];
    hint?: string;
    disabled?: boolean;
  } = $props();

  let root: HTMLDivElement;
  let trigger: HTMLButtonElement;
  let open = $state(false);
  // svelte-ignore state_referenced_locally -- options intentionally seeds component-local selection
  let selectedIndex = $state(0);
  let activeIndex = $state(0);

  const selected = $derived(options[selectedIndex] ?? 'Select an option');

  function select(index: number) {
    selectedIndex = index;
    activeIndex = index;
    open = false;
    requestAnimationFrame(() => trigger.focus());
  }

  function onkeydown(event: KeyboardEvent) {
    if (disabled || !options.length) return;

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      open = true;
      const direction = event.key === 'ArrowDown' ? 1 : -1;
      activeIndex = (activeIndex + direction + options.length) % options.length;
    } else if (event.key === 'Home') {
      event.preventDefault();
      open = true;
      activeIndex = 0;
    } else if (event.key === 'End') {
      event.preventDefault();
      open = true;
      activeIndex = options.length - 1;
    } else if ((event.key === 'Enter' || event.key === ' ') && open) {
      event.preventDefault();
      select(activeIndex);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      open = false;
    }
  }
</script>

<svelte:window
  onclick={(event) => {
    if (open && !root?.contains(event.target as Node)) open = false;
  }}
/>

<div bind:this={root} class="relative">
  <label id={`${id}-label`} for={id} class="mb-1.5 block text-sm font-semibold text-slate-700"
    >{label}</label
  >
  <button
    bind:this={trigger}
    {id}
    type="button"
    role="combobox"
    aria-labelledby={`${id}-label ${id}-value`}
    aria-controls={`${id}-listbox`}
    aria-expanded={open}
    aria-haspopup="listbox"
    aria-activedescendant={open ? `${id}-option-${activeIndex}` : undefined}
    aria-describedby={hint ? `${id}-hint` : undefined}
    {disabled}
    class="control-base flex items-center justify-between gap-3 text-left disabled:cursor-not-allowed disabled:bg-cloud-100 disabled:text-slate-400"
    onclick={() => (open = !open)}
    {onkeydown}
  >
    <span id={`${id}-value`} class="min-w-0 flex-1 truncate">{selected}</span>
    <Icon
      name="chevron-down"
      size={16}
      class="shrink-0 text-slate-500 transition-transform {open ? 'rotate-180' : ''}"
    />
  </button>

  {#if open}
    <div
      id={`${id}-listbox`}
      role="listbox"
      aria-labelledby={`${id}-label`}
      class="absolute left-0 right-0 z-40 mt-2 max-h-60 overflow-y-auto rounded-panel border border-cloud-200 bg-white p-1.5 shadow-panel"
    >
      {#each options as option, index}
        <button
          id={`${id}-option-${index}`}
          type="button"
          role="option"
          aria-selected={selectedIndex === index}
          tabindex="-1"
          class="flex w-full items-center justify-between gap-3 rounded-control px-3 py-2 text-left text-sm transition {activeIndex ===
          index
            ? 'bg-cloud-100 text-slate-800'
            : 'text-slate-600 hover:bg-cloud-100'}"
          onmouseenter={() => (activeIndex = index)}
          onclick={() => select(index)}
        >
          <span>{option}</span>
          {#if selectedIndex === index}<Icon name="check" size={16} class="text-brand-600" />{/if}
        </button>
      {/each}
    </div>
  {/if}

  <input type="hidden" name={id} value={selected} />
  {#if hint}<p id={`${id}-hint`} class="mt-1.5 text-xs text-slate-500">{hint}</p>{/if}
</div>
