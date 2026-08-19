<script lang="ts">
  import Icon from '../core/Icon.svelte';
  import type { IconName } from '../core/icon-types';
  let {
    title,
    message,
    color = 'blue',
    icon = 'image',
  }: {
    title: string;
    message: string;
    color?: 'blue' | 'green' | 'purple' | 'orange';
    icon?: IconName;
  } = $props();
  const colors = {
    blue: 'from-bluejeans-400 to-aqua-500',
    green: 'from-brand-400 to-mint-500',
    purple: 'from-lavender-400 to-pinkrose-500',
    orange: 'from-sunflower-400 to-bittersweet-500',
  };
</script>

<article class="group overflow-hidden rounded-panel border border-cloud-200 bg-white shadow-sm">
  <div class="grid aspect-[16/10] place-items-center bg-gradient-to-br {colors[color]} text-white">
    <Icon
      name={icon}
      size={42}
      strokeWidth={1.4}
      class="transition-transform group-hover:scale-110"
    />
  </div>
  <div class="p-4">
    <h3 class="font-semibold text-slate-700">{title}</h3>
    <p class="mt-1 text-sm text-slate-500">{message}</p>
  </div>
</article>
