<script lang="ts">
  import BrandLogo from '../core/BrandLogo.svelte';
  import Icon from '../core/Icon.svelte';

  const workspaces = [
    {
      href: '#navigator',
      label: 'Reservation',
      detail: 'Active workspace',
      icon: 'calendar',
      active: true,
    },
    {
      href: '#stats',
      label: 'Accounting',
      detail: 'Finance & billing',
      icon: 'card',
      active: false,
    },
    {
      href: '#forms',
      label: 'Administrator',
      detail: 'Team & access',
      icon: 'shield',
      active: false,
    },
  ] as const;
  const navigationLinks = [
    { href: '#navigator', label: 'Dashboard', icon: 'dashboard', active: true },
    { href: '#forms', label: 'Reservations', icon: 'calendar', active: false },
    { href: '#tables', label: 'Operations', icon: 'gauge', active: false },
    { href: '#stats', label: 'Reports', icon: 'file', active: false },
  ] as const;
</script>

<nav
  class="overflow-hidden rounded-panel border border-cloud-200 bg-white shadow-panel"
  aria-label="Travox application workspace"
>
  <div class="grid sm:grid-cols-[14rem_minmax(0,1fr)]">
    <div class="bg-slate-900 p-4 text-white sm:p-5">
      <BrandLogo inverse />
      <p class="mb-2 mt-6 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-slate-400">
        Workspace switcher
      </p>
      <div class="grid gap-1.5">
        {#each workspaces as item}
          <a
            href={item.href}
            aria-current={item.active ? 'page' : undefined}
            class="flex items-center gap-3 rounded-control px-3 py-2.5 no-underline transition-colors {item.active
              ? 'bg-brand-500 text-white shadow-sm'
              : 'text-cloud-300 hover:bg-white/10 hover:text-white'}"
          >
            <span
              class="grid size-8 shrink-0 place-items-center rounded-control {item.active
                ? 'bg-white/15'
                : 'bg-white/5'}"
            >
              <Icon name={item.icon} size={17} />
            </span>
            <span class="min-w-0">
              <strong class="block truncate text-sm">{item.label}</strong>
              <span class="block truncate text-[0.6875rem] opacity-70">{item.detail}</span>
            </span>
          </a>
        {/each}
      </div>
    </div>

    <div class="min-w-0">
      <div
        class="flex flex-col gap-3 border-b border-cloud-200 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-5"
      >
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.1em] text-brand-600">Operations</p>
          <p class="mt-0.5 text-base font-bold text-slate-800">Reservation workspace</p>
        </div>
        <div class="flex items-center gap-2">
          <button
            type="button"
            class="relative grid size-9 place-items-center rounded-full border border-cloud-200 text-slate-600 hover:bg-cloud-100"
            aria-label="Inbox"
          >
            <Icon name="inbox" size={17} />
            <span
              class="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full border-2 border-white bg-grapefruit-500 text-[0.5625rem] font-bold text-white"
              >3</span
            >
          </button>
          <button
            type="button"
            class="grid size-9 place-items-center rounded-full border border-cloud-200 text-slate-600 hover:bg-cloud-100"
            aria-label="Notifications"
          >
            <Icon name="bell" size={17} />
          </button>
          <div class="ml-1 flex items-center gap-2 border-l border-cloud-200 pl-3">
            <span
              class="grid size-8 place-items-center rounded-full bg-brand-100 text-xs font-bold text-brand-700"
              aria-hidden="true">KT</span
            >
            <span class="hidden text-xs leading-tight text-slate-500 lg:block">
              Signed in as
              <strong class="block text-sm text-slate-700">Kananek T.</strong>
            </span>
          </div>
        </div>
      </div>

      <div class="p-4 sm:p-5">
        <div class="mb-3 flex items-center justify-between gap-4">
          <p class="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
            Quick navigation
          </p>
          <span class="inline-flex items-center gap-1.5 text-xs font-medium text-mint-500">
            <span class="size-2 rounded-full bg-mint-500"></span>All systems ready
          </span>
        </div>
        <div class="grid grid-cols-2 gap-2 lg:grid-cols-4">
          {#each navigationLinks as item}
            <a
              href={item.href}
              aria-current={item.active ? 'page' : undefined}
              class="flex min-h-20 flex-col justify-between rounded-control border p-3 no-underline transition-colors {item.active
                ? 'border-brand-300 bg-brand-50 text-brand-700'
                : 'border-cloud-200 text-slate-600 hover:border-cloud-300 hover:bg-cloud-50'}"
            >
              <Icon name={item.icon} size={18} />
              <strong class="mt-3 text-sm">{item.label}</strong>
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
</nav>
