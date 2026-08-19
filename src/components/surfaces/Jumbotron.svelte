<script lang="ts">
  import Button from '../core/Button.svelte';
</script>

<section
  class="overflow-hidden rounded-panel bg-cloud-200 px-6 py-10 text-slate-700 sm:px-10 sm:py-12"
>
  <div class="max-w-2xl">
    <p class="text-xs font-bold uppercase tracking-[0.12em] text-brand-700">Travox MidBack 2.0</p>
    <h2 class="mt-2 text-2xl font-semibold text-slate-800 sm:text-3xl">
      A familiar workspace, rebuilt for the modern web.
    </h2>
    <p class="mt-3 max-w-xl text-sm text-slate-600">
      The original Bootflat character remains, with clearer rhythm, accessible interactions, and a
      dramatically smaller dependency surface.
    </p>
    <div class="mt-6 flex flex-wrap gap-3">
      <Button label="Explore components" variant="primary" href="#colors" /><Button
        label="View navigation"
        href="#navigator"
        variant="inverse"
      />
    </div>
  </div>
</section>
