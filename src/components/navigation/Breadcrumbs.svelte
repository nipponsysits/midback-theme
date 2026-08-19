<script lang="ts">
  import Icon from '../core/Icon.svelte';
  let { arrow = false }: { arrow?: boolean } = $props();
</script>

<nav aria-label="Breadcrumb">
  <ol class="flex flex-wrap items-center text-sm">
    <li><a href="#top" class="font-medium text-bluejeans-500 hover:underline">Home</a></li>
    <li class="mx-2 text-slate-400" aria-hidden="true">
      {#if arrow}<Icon name="chevron-right" size={14} />{:else}/{/if}
    </li>
    <li>
      <a href="#forms" class="font-medium text-bluejeans-500 hover:underline">Reservations</a>
    </li>
    <li class="mx-2 text-slate-400" aria-hidden="true">
      {#if arrow}<Icon name="chevron-right" size={14} />{:else}/{/if}
    </li>
    <li aria-current="page" class="text-slate-600">TVX-2026-1842</li>
  </ol>
</nav>
