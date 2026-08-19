<script lang="ts">
  let {
    compact = false,
    inverse = false,
  }: {
    compact?: boolean;
    inverse?: boolean;
  } = $props();
</script>

<a href="#top" class="inline-flex items-center gap-2 no-underline" aria-label="Travox home">
  <span
    class="grid size-8 place-items-center rounded-control bg-brand-500 text-sm font-black tracking-tighter text-white"
    aria-hidden="true">T</span
  >
  {#if !compact}
    <span class="leading-none">
      <span
        class="block text-base font-extrabold tracking-[0.13em] {inverse
          ? 'text-white'
          : 'text-slate-800'}">TRAVOX</span
      >
      <span
        class="mt-0.5 block text-[0.625rem] font-semibold uppercase tracking-[0.18em] {inverse
          ? 'text-cloud-300'
          : 'text-slate-500'}">MidBack Office</span
      >
    </span>
  {/if}
</a>
