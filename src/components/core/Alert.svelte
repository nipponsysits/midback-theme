<script lang="ts">
  import Icon from './Icon.svelte';
  import type { IconName } from './icon-types';

  type Variant = 'success' | 'info' | 'warning' | 'danger';
  let {
    title,
    message,
    variant = 'info',
    dismissible = false,
  }: {
    title: string;
    message: string;
    variant?: Variant;
    dismissible?: boolean;
  } = $props();

  let visible = $state(true);
  const variants: Record<Variant, { shell: string; icon: IconName }> = {
    success: {
      shell: 'border-grass-400/60 bg-grass-400/15 text-[#527d25]',
      icon: 'check-circle',
    },
    info: { shell: 'border-aqua-400/60 bg-aqua-400/12 text-[#287b9b]', icon: 'info' },
    warning: {
      shell: 'border-sunflower-400/70 bg-sunflower-400/15 text-[#8a641b]',
      icon: 'warning',
    },
    danger: {
      shell: 'border-[#c0392b]/50 bg-[#c0392b]/10 text-[#9f3025]',
      icon: 'x-circle',
    },
  };
</script>

{#if visible}
  <div
    class="flex items-start gap-3 rounded-panel border p-4 {variants[variant].shell}"
    role={variant === 'danger' ? 'alert' : 'status'}
  >
    <Icon name={variants[variant].icon} size={18} class="mt-0.5 shrink-0" />
    <div class="min-w-0 flex-1">
      <p class="font-semibold">{title}</p>
      <p class="mt-0.5 text-sm opacity-90">{message}</p>
    </div>
    {#if dismissible}
      <button
        type="button"
        class="rounded p-1 opacity-70 transition hover:bg-black/5 hover:opacity-100"
        aria-label="Dismiss alert"
        onclick={() => (visible = false)}><Icon name="x" size={16} /></button
      >
    {/if}
  </div>
{/if}
