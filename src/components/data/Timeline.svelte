<script lang="ts">
  import Icon from '../core/Icon.svelte';
  const events = [
    {
      time: '09:15',
      title: 'Reservation created',
      body: 'Online team · TVX-1842',
      icon: 'plus' as const,
    },
    { time: '10:40', title: 'Payment authorized', body: 'Visa ending 4028', icon: 'card' as const },
    {
      time: '11:05',
      title: 'Tickets issued',
      body: '2 e-tickets sent to customer',
      icon: 'check' as const,
    },
  ];
</script>

<ol class="relative ml-4 border-l border-cloud-300">
  {#each events as event}
    <li class="relative pb-7 pl-8 last:pb-0">
      <span
        class="absolute -left-4 top-0 grid size-8 place-items-center rounded-full border-4 border-white bg-brand-500 text-white"
        ><Icon name={event.icon} size={13} strokeWidth={2.5} /></span
      >
      <time class="text-xs font-semibold text-slate-400">{event.time}</time>
      <h3 class="mt-0.5 font-semibold text-slate-700">{event.title}</h3>
      <p class="text-sm text-slate-500">{event.body}</p>
    </li>
  {/each}
</ol>
