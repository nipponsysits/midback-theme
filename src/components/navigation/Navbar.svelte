<script lang="ts">
  import BrandLogo from '../core/BrandLogo.svelte';
  import Icon from '../core/Icon.svelte';

  const links = [
    { href: '#top', label: 'Home' },
    { href: '#forms', label: 'Bookings' },
    { href: '#tables', label: 'Reports' },
    { href: '#footer', label: 'Contact' },
  ];
  const mobileLinks = links.slice(0, 3);

  let { inverse = false }: { inverse?: boolean } = $props();
  const shell = $derived(
    inverse
      ? 'border-[#333] bg-[#333] text-[#8c8c8c]'
      : 'border-mint-500 bg-mint-500 text-[#26816a]',
  );
  const link = $derived(
    inverse
      ? 'text-[#8c8c8c] hover:bg-black hover:text-white'
      : 'text-[#26816a] hover:bg-mint-400 hover:text-white',
  );
  const active = $derived(inverse ? 'bg-black text-white' : 'bg-mint-400 text-white');
</script>

<nav class="rounded-panel border px-4 py-2 shadow-sm {shell}" aria-label="Site navigation">
  <div class="flex items-center justify-between gap-4">
    <BrandLogo {inverse} compact />
    <div class="hidden items-center gap-1 sm:flex">
      {#each links as item, index}
        <a
          href={item.href}
          class="rounded-control px-4 py-2 text-sm {index === 0
            ? 'font-semibold'
            : 'font-medium'} {index === 0 ? active : link}">{item.label}</a
        >
      {/each}
    </div>
    <details class="group relative sm:hidden">
      <summary
        class="grid size-10 cursor-pointer list-none place-items-center rounded-control {link} [&::-webkit-details-marker]:hidden"
      >
        <Icon name="menu" label="Toggle navigation" />
      </summary>
      <div
        class="absolute right-0 z-20 mt-2 w-48 rounded-panel border border-cloud-200 bg-white p-2 text-slate-700 shadow-panel"
      >
        {#each mobileLinks as item}
          <a href={item.href} class="block rounded-control px-3 py-2 hover:bg-cloud-100"
            >{item.label}</a
          >
        {/each}
      </div>
    </details>
  </div>
</nav>
