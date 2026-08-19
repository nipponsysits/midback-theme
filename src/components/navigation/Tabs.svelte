<script lang="ts">
  let {
    variant = 'tabs',
  }: {
    variant?: 'tabs' | 'pills';
  } = $props();

  const items = [
    { label: 'Overview', body: 'A compact summary of today’s reservations and outstanding tasks.' },
    { label: 'Activity', body: 'Recent changes from the operations and accounting teams.' },
    { label: 'Notes', body: 'Shared notes remain visible to everyone working on this booking.' },
  ];
  let active = $state(0);

  function keydown(event: KeyboardEvent, index: number) {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    if (event.key === 'Home') active = 0;
    else if (event.key === 'End') active = items.length - 1;
    else active = (index + (event.key === 'ArrowRight' ? 1 : -1) + items.length) % items.length;
    document.getElementById(`tab-${variant}-${active}`)?.focus();
  }
</script>

<div>
  <div
    role="tablist"
    aria-label="Booking information"
    class={variant === 'tabs'
      ? 'flex border-b border-cloud-300'
      : 'inline-flex gap-0 rounded-control bg-cloud-100 p-0'}
  >
    {#each items as item, index}
      <button
        id={`tab-${variant}-${index}`}
        type="button"
        role="tab"
        aria-selected={active === index}
        aria-controls={`panel-${variant}-${index}`}
        tabindex={active === index ? 0 : -1}
        class={variant === 'tabs'
          ? `-mb-px border-b-2 px-4 py-2.5 text-sm font-semibold ${active === index ? 'border-aqua-500 text-aqua-500' : 'border-transparent text-slate-500 hover:text-slate-700'}`
          : `rounded-control px-4 py-2 text-sm font-semibold ${active === index ? 'bg-aqua-500 text-white shadow-sm' : 'text-slate-500 hover:bg-cloud-200 hover:text-slate-700'}`}
        onclick={() => (active = index)}
        onkeydown={(event) => keydown(event, index)}>{item.label}</button
      >
    {/each}
  </div>
  {#each items as item, index}
    <div
      id={`panel-${variant}-${index}`}
      role="tabpanel"
      aria-labelledby={`tab-${variant}-${index}`}
      hidden={active !== index}
      class="py-5 text-sm text-slate-600"
    >
      {item.body}
    </div>
  {/each}
</div>
