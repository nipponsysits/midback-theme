<script lang="ts">
  import Icon from '../core/Icon.svelte';
  import Button from '../core/Button.svelte';
  let {
    name,
    price,
    features,
    featured = false,
  }: {
    name: string;
    price: number;
    features: string[];
    featured?: boolean;
  } = $props();
</script>

<article
  class="relative overflow-hidden rounded-panel border bg-white shadow-sm {featured
    ? 'border-brand-500 ring-2 ring-brand-500/15'
    : 'border-cloud-200'}"
>
  {#if featured}<p
      class="bg-brand-500 py-2 text-center text-xs font-bold uppercase tracking-[0.12em] text-white"
    >
      Most popular
    </p>{/if}
  <header class="border-b border-cloud-200 p-5 text-center">
    <h3 class="text-sm font-bold uppercase tracking-wide text-slate-500">{name}</h3>
    <p class="mt-3 text-4xl font-semibold tracking-tight text-slate-800">
      <span class="align-top text-base">฿</span>{price.toLocaleString()}<span
        class="text-sm font-normal text-slate-400">/mo</span
      >
    </p>
  </header>
  <ul class="space-y-3 p-5">
    {#each features as feature}<li class="flex items-center gap-2 text-sm text-slate-600">
        <Icon name="check" size={16} class="text-brand-600" />{feature}
      </li>{/each}
  </ul>
  <div class="px-5 pb-5">
    <Button label="Choose plan" variant={featured ? 'primary' : 'default'} block />
  </div>
</article>
