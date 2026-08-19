<script lang="ts">
  import Icon from '../core/Icon.svelte';
  let { compact = false }: { compact?: boolean } = $props();
</script>

{#if compact}
  <nav class="flex items-center justify-between gap-4" aria-label="Record navigation">
    <a
      href="#pagination"
      class="inline-flex items-center gap-1.5 text-sm font-semibold text-aqua-500 hover:underline"
      ><Icon name="chevron-left" size={16} /> Older</a
    >
    <a
      href="#pagination"
      class="inline-flex items-center gap-1.5 text-sm font-semibold text-aqua-500 hover:underline"
      >Newer <Icon name="chevron-right" size={16} /></a
    >
  </nav>
{:else}
  <nav aria-label="Pagination">
    <ul class="inline-flex overflow-hidden rounded-control border border-cloud-300 bg-white">
      <li>
        <a
          href="#pagination"
          aria-label="Previous page"
          class="grid size-9 place-items-center border-r border-cloud-300 hover:bg-cloud-300 hover:text-white"
          ><Icon name="chevron-left" size={16} /></a
        >
      </li>
      {#each [1, 2, 3, 4] as page}
        <li>
          <a
            href="#pagination"
            aria-current={page === 2 ? 'page' : undefined}
            class="grid size-9 place-items-center border-r border-cloud-300 text-sm font-semibold last:border-r-0 {page ===
            2
              ? 'bg-aqua-500 text-white'
              : 'text-slate-600 hover:bg-cloud-300 hover:text-white'}">{page}</a
          >
        </li>
      {/each}
      <li>
        <a
          href="#pagination"
          aria-label="Next page"
          class="grid size-9 place-items-center hover:bg-cloud-300 hover:text-white"
          ><Icon name="chevron-right" size={16} /></a
        >
      </li>
    </ul>
  </nav>
{/if}
