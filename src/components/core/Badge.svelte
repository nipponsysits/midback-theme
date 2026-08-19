<script lang="ts">
  type Variant = 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
  let {
    label,
    variant = 'default',
    pill = false,
  }: {
    label: string;
    variant?: Variant;
    pill?: boolean;
  } = $props();

  const variants: Record<Variant, string> = {
    default: 'bg-slate-500 text-white',
    primary: 'bg-aqua-500 text-white',
    success: 'bg-grass-500 text-white',
    info: 'bg-mint-500 text-white',
    warning: 'bg-sunflower-500 text-white',
    danger: 'bg-[#c0392b] text-white',
  };
</script>

<span
  class="inline-flex min-h-5 items-center justify-center px-2 py-0.5 text-xs font-semibold leading-none {pill
    ? 'rounded-full'
    : 'rounded-control'} {variants[variant]}">{label}</span
>
