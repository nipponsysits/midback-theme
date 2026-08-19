<script lang="ts">
  import Icon from '../core/Icon.svelte';

  let items = $state([
    'Confirm passenger names',
    'Collect payment',
    'Issue tickets',
    'Send itinerary',
  ]);
  let dragging = $state<number | null>(null);

  function move(from: number, to: number) {
    if (from === to || to < 0 || to >= items.length) return;
    const next = [...items];
    const [item] = next.splice(from, 1);
    next.splice(to, 0, item);
    items = next;
  }
</script>

<ol class="space-y-2" aria-label="Booking workflow">
  {#each items as item, index (item)}
    <!-- svelte-ignore a11y_no_static_element_interactions -- drop target also has keyboard reorder controls -->
    <li
      draggable="true"
      ondragstart={() => (dragging = index)}
      ondragend={() => (dragging = null)}
      ondragover={(event) => event.preventDefault()}
      ondrop={(event) => {
        event.preventDefault();
        if (dragging !== null) move(dragging, index);
        dragging = null;
      }}
      class="flex items-center gap-3 rounded-control border bg-white px-3 py-2.5 transition {dragging ===
      index
        ? 'border-brand-400 opacity-50'
        : 'border-cloud-200 hover:border-cloud-300'}"
    >
      <span class="cursor-grab text-slate-400" aria-hidden="true"
        ><Icon name="menu" size={16} /></span
      >
      <span class="min-w-0 flex-1 text-sm font-medium text-slate-700">{item}</span>
      <div class="flex gap-1">
        <button
          type="button"
          class="grid size-7 place-items-center rounded text-slate-500 hover:bg-cloud-100 disabled:opacity-30"
          aria-label={`Move ${item} up`}
          disabled={index === 0}
          onclick={() => move(index, index - 1)}
          ><Icon name="chevron-left" size={15} class="rotate-90" /></button
        >
        <button
          type="button"
          class="grid size-7 place-items-center rounded text-slate-500 hover:bg-cloud-100 disabled:opacity-30"
          aria-label={`Move ${item} down`}
          disabled={index === items.length - 1}
          onclick={() => move(index, index + 1)}
          ><Icon name="chevron-right" size={15} class="rotate-90" /></button
        >
      </div>
    </li>
  {/each}
</ol>
