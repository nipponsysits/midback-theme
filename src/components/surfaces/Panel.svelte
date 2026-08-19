<script lang="ts">
  type Variant = 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
  let {
    title,
    message,
    variant = 'default',
    well = false,
  }: {
    title: string;
    message: string;
    variant?: Variant;
    well?: boolean;
  } = $props();

  const variants: Record<Variant, string> = {
    default: 'bg-cloud-200 text-slate-700',
    primary: 'bg-aqua-500 text-white',
    success: 'bg-grass-500 text-white',
    info: 'bg-mint-500 text-white',
    warning: 'bg-sunflower-500 text-white',
    danger: 'bg-[#c0392b] text-white',
  };
</script>

{#if well}
  <div class="rounded-panel border border-cloud-200 bg-cloud-100 p-5 shadow-inner">
    <h3 class="font-semibold text-slate-700">{title}</h3>
    <p class="mt-1 text-sm text-slate-500">{message}</p>
  </div>
{:else}
  <article class="overflow-hidden rounded-panel border border-cloud-200 bg-white shadow-sm">
    <header class="px-4 py-3 {variants[variant]}">
      <h3 class="font-semibold">{title}</h3>
    </header>
    <p class="p-4 text-sm text-slate-600">{message}</p>
  </article>
{/if}
