<script lang="ts">
  import Icon from '../core/Icon.svelte';

  let {
    id = 'tag-input',
    label = 'Destinations',
    initial = ['Bangkok', 'Chiang Mai'],
  }: {
    id?: string;
    label?: string;
    initial?: string[];
  } = $props();

  // svelte-ignore state_referenced_locally -- this prop intentionally seeds local editable state
  let tags = $state([...initial]);
  let draft = $state('');

  function addTag() {
    const next = draft.trim();
    if (next && !tags.includes(next)) tags = [...tags, next];
    draft = '';
  }

  function onkeydown(event: KeyboardEvent) {
    if (
      event.key === 'Enter' ||
      event.key === ',' ||
      (event.key === 'Tab' && !event.shiftKey && draft.trim())
    ) {
      event.preventDefault();
      addTag();
    } else if (event.key === 'Backspace' && !draft && tags.length) {
      tags = tags.slice(0, -1);
    }
  }
</script>

<div>
  <label for={id} class="mb-1.5 block text-sm font-semibold text-slate-700">{label}</label>
  <div
    class="flex min-h-10 flex-wrap items-center gap-1.5 rounded-control border border-cloud-300 bg-white px-2.5 py-1.5 focus-within:border-aqua-500 focus-within:shadow-[0_0_0_3px_rgb(59_175_218_/_0.14)]"
  >
    {#each tags as tag}
      <span
        class="inline-flex items-center gap-1 rounded-control border border-cloud-300 bg-cloud-100 px-2 py-1 text-xs text-slate-700"
      >
        {tag}
        <button
          type="button"
          class="rounded-sm text-slate-500 hover:text-grapefruit-500"
          aria-label={`Remove ${tag}`}
          onclick={() => (tags = tags.filter((value) => value !== tag))}
          ><Icon name="x" size={13} /></button
        >
      </span>
    {/each}
    <input
      {id}
      bind:value={draft}
      {onkeydown}
      onblur={addTag}
      class="min-w-28 flex-1 border-0 bg-transparent px-1 py-1 text-sm outline-none"
      placeholder="Type and press Enter or Tab"
    />
  </div>
  <p class="mt-1.5 text-xs text-slate-500">
    Enter, comma, or Tab adds an item without leaving the field; Backspace removes the last.
  </p>
</div>
