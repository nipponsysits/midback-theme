<script lang="ts">
  type Variant = 'primary' | 'success' | 'info' | 'warning' | 'danger';
  let {
    value,
    variant = 'primary',
    label = 'Progress',
    striped = false,
  }: {
    value: number;
    variant?: Variant;
    label?: string;
    striped?: boolean;
  } = $props();

  const variants: Record<Variant, string> = {
    primary: 'bg-aqua-500',
    success: 'bg-grass-500',
    info: 'bg-mint-500',
    warning: 'bg-sunflower-500',
    danger: 'bg-[#c0392b]',
  };
  const safeValue = $derived(Math.min(100, Math.max(0, value)));
</script>

<div>
  <div class="mb-1 flex items-center justify-between text-xs text-slate-500">
    <span>{label}</span><span>{safeValue}%</span>
  </div>
  <div
    class="h-2.5 overflow-hidden rounded-full bg-cloud-200"
    role="progressbar"
    aria-label={label}
    aria-valuenow={safeValue}
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div
      class="h-full rounded-full transition-[width] duration-300 {variants[variant]} {striped
        ? 'bg-[linear-gradient(45deg,rgba(255,255,255,.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.2)_50%,rgba(255,255,255,.2)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem]'
        : ''}"
      style={`width:${safeValue}%`}
    ></div>
  </div>
</div>
