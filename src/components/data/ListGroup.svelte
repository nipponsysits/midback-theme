<script lang="ts">
  import Icon from '../core/Icon.svelte';
  let { rich = false }: { rich?: boolean } = $props();

  const simpleItems = [
    'Dashboard overview',
    'Reservations',
    'Customer profiles',
    'Financial reports',
  ];
  const richItems = [
    {
      title: 'Reservation confirmed',
      body: 'TVX-1842 was confirmed by the airline.',
      time: '4 min',
    },
    { title: 'Payment received', body: 'A payment of ฿24,800 was recorded.', time: '32 min' },
    {
      title: 'New customer note',
      body: 'Dietary preferences were added to the profile.',
      time: '1 hr',
    },
  ];
</script>

<div
  class="divide-y divide-cloud-200 overflow-hidden rounded-panel border border-cloud-200 bg-white"
>
  {#if rich}
    {#each richItems as item, index}
      <a href="#lists" class="flex gap-3 p-4 transition hover:bg-cloud-100">
        <span
          class="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full {index === 0
            ? 'bg-brand-100 text-brand-700'
            : 'bg-cloud-200 text-slate-600'}"
          ><Icon name={index === 0 ? 'check' : index === 1 ? 'card' : 'message'} size={16} /></span
        >
        <span class="min-w-0 flex-1"
          ><span class="block font-semibold text-slate-700">{item.title}</span><span
            class="mt-0.5 block text-sm text-slate-500">{item.body}</span
          ></span
        >
        <span class="shrink-0 text-xs text-slate-400">{item.time}</span>
      </a>
    {/each}
  {:else}
    {#each simpleItems as item, index}
      <a
        href="#lists"
        aria-current={index === 0 ? 'page' : undefined}
        class="flex items-center justify-between px-4 py-3 text-sm font-medium {index === 0
          ? 'bg-brand-500 text-white'
          : 'text-slate-700 hover:bg-cloud-100'}"
      >
        {item}<Icon name="chevron-right" size={15} />
      </a>
    {/each}
  {/if}
</div>
