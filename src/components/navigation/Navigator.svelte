<script lang="ts">
  import BrandLogo from '../core/BrandLogo.svelte';
  import Icon from '../core/Icon.svelte';

  const workspaceLinks = [
    { href: '#navigator', label: 'Reservation', active: true },
    { href: '#stats', label: 'Accounting', active: false },
    { href: '#forms', label: 'Administrator', active: false },
  ];
  const navigationLinks = [
    { href: '#navigator', label: 'Dashboard', active: true },
    { href: '#forms', label: 'Reservations', active: false },
    { href: '#tables', label: 'Operations', active: false },
    { href: '#stats', label: 'Reports', active: false },
    { href: '#footer', label: 'Logout', active: false },
  ];
</script>

<nav
  class="overflow-hidden rounded-panel bg-white shadow-panel"
  aria-label="Travox application navigation"
>
  <div class="relative min-h-[7.5rem] px-4 sm:px-6">
    <div class="absolute bottom-10 left-6 hidden sm:block">
      <BrandLogo />
    </div>

    <div class="sm:ml-44">
      <div class="hidden justify-end sm:flex">
        {#each workspaceLinks as item}
          <a
            href={item.href}
            class="rounded-b-lg px-4 pb-2.5 pt-1.5 text-sm font-semibold uppercase {item.active
              ? 'bg-brand-500 text-white'
              : 'text-slate-800 hover:bg-cloud-200'}">{item.label}</a
          >
        {/each}
      </div>

      <div class="flex h-12 items-center justify-between gap-4 sm:justify-end">
        <div class="sm:hidden"><BrandLogo /></div>
        <div class="flex items-center gap-1">
          <button
            type="button"
            class="relative grid size-8 place-items-center rounded-full text-slate-700 opacity-80 hover:bg-cloud-100 hover:opacity-100"
            aria-label="Inbox"
          >
            <Icon name="inbox" size={18} />
            <span
              class="absolute -right-1.5 -top-1.5 grid size-5 place-items-center rounded-full border-2 border-white bg-[#e60404] text-[0.5625rem] font-bold text-white"
              >3</span
            >
          </button>
          <button
            type="button"
            class="relative grid size-8 place-items-center rounded-full text-slate-700 opacity-80 hover:bg-cloud-100 hover:opacity-100"
            aria-label="Notifications"
          >
            <Icon name="bell" size={18} />
            <span class="absolute left-1 top-3 size-1 rounded-full bg-slate-700"></span>
          </button>
        </div>
        <p class="ml-3 hidden text-sm text-slate-700 md:block">
          You are logged in as <strong>Kananek T. (TVX)</strong>
        </p>
      </div>

      <div class="hide-scrollbar flex overflow-x-auto sm:justify-end">
        {#each navigationLinks as item}
          <a
            href={item.href}
            class="whitespace-nowrap px-4 py-2 text-sm font-semibold {item.active
              ? 'rounded-t-control bg-brand-500 text-white'
              : 'border-l border-cloud-200 text-slate-700 hover:bg-cloud-100'}">{item.label}</a
          >
        {/each}
      </div>
    </div>
  </div>
</nav>
