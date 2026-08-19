<script lang="ts">
  const people = [
    {
      initials: 'AP',
      name: 'Araya P.',
      message: 'The revised itinerary looks good. Thank you!',
      color: 'bg-bluejeans-400',
    },
    {
      initials: 'NW',
      name: 'Napat W.',
      message: 'Could you also send a copy to accounting?',
      color: 'bg-lavender-500',
    },
    {
      initials: 'MS',
      name: 'Mina S.',
      message: 'Confirmed — I have added it to the booking.',
      color: 'bg-mint-500',
    },
  ];
</script>

<ul class="divide-y divide-cloud-200">
  {#each people as person, index}
    <li class="flex gap-3 py-4 first:pt-0 last:pb-0">
      <span
        class="grid size-10 shrink-0 place-items-center rounded-full text-xs font-bold text-white {person.color}"
        >{person.initials}</span
      >
      <div class="min-w-0 flex-1">
        <div class="flex items-baseline justify-between gap-3">
          <h3 class="font-semibold text-slate-700">{person.name}</h3>
          <time class="text-xs text-slate-400">{index + 1}h</time>
        </div>
        <p class="mt-0.5 text-sm text-slate-500">{person.message}</p>
      </div>
    </li>
  {/each}
</ul>
