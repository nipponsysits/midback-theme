<script lang="ts">
  import Icon from './Icon.svelte';
  import type { IconName } from './icon-types';

  type Variant =
    'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'inverse' | 'link';
  type Size = 'xs' | 'sm' | 'md' | 'lg';

  let {
    label,
    variant = 'default',
    size = 'md',
    icon,
    iconOnly = false,
    block = false,
    disabled = false,
    href,
    type = 'button',
    onclick,
    class: className = '',
  }: {
    label: string;
    variant?: Variant;
    size?: Size;
    icon?: IconName;
    iconOnly?: boolean;
    block?: boolean;
    disabled?: boolean;
    href?: string;
    type?: 'button' | 'submit' | 'reset';
    onclick?: (event: MouseEvent) => void;
    class?: string;
  } = $props();

  const variants: Record<Variant, string> = {
    default:
      'border-cloud-300 bg-transparent text-slate-700 hover:border-slate-400 active:bg-cloud-200',
    primary: 'border-aqua-500 bg-aqua-500 text-white hover:border-aqua-400 hover:bg-aqua-400',
    success: 'border-grass-500 bg-grass-500 text-white hover:border-grass-400 hover:bg-grass-400',
    info: 'border-mint-500 bg-mint-500 text-white hover:border-mint-400 hover:bg-mint-400',
    warning:
      'border-sunflower-500 bg-sunflower-500 text-white hover:border-sunflower-400 hover:bg-sunflower-400',
    danger: 'border-[#c0392b] bg-[#c0392b] text-white hover:border-[#e74c3c] hover:bg-[#e74c3c]',
    inverse: 'border-white/25 bg-white/5 text-white hover:bg-white/10 active:bg-white/15',
    link: 'border-transparent bg-transparent text-bluejeans-500 hover:bg-bluejeans-400/10 hover:underline',
  };

  const sizes: Record<Size, string> = {
    xs: 'min-h-7 px-2.5 text-xs',
    sm: 'min-h-8 px-3 text-xs',
    md: 'min-h-9 px-4 text-sm',
    lg: 'min-h-11 px-5 text-base',
  };

  const classes = $derived(
    `inline-flex select-none items-center justify-center gap-2 rounded-control border font-semibold shadow-sm transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${iconOnly ? 'aspect-square !px-0' : ''} ${block ? 'w-full' : ''} ${className}`,
  );
</script>

{#if href && !disabled}
  <a class={classes} {href} aria-label={iconOnly ? label : undefined}>
    {#if icon}<Icon name={icon} size={size === 'lg' ? 18 : 16} />{/if}
    {#if !iconOnly}{label}{/if}
  </a>
{:else}
  <button class={classes} {type} {disabled} {onclick} aria-label={iconOnly ? label : undefined}>
    {#if icon}<Icon name={icon} size={size === 'lg' ? 18 : 16} />{/if}
    {#if !iconOnly}{label}{/if}
  </button>
{/if}
