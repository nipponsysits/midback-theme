<script lang="ts">
  import Badge from '../core/Badge.svelte';
  import Icon from '../core/Icon.svelte';

  const rows = [
    {
      id: 'TVX-1842',
      guest: 'Araya Ch.',
      route: 'Bangkok → Tokyo',
      date: '21 Aug 2026',
      status: 'Confirmed',
    },
    {
      id: 'TVX-1841',
      guest: 'Napat W.',
      route: 'Chiang Mai → Seoul',
      date: '22 Aug 2026',
      status: 'Pending',
    },
    {
      id: 'TVX-1838',
      guest: 'Mina P.',
      route: 'Phuket → Singapore',
      date: '24 Aug 2026',
      status: 'Cancelled',
    },
    {
      id: 'TVX-1834',
      guest: 'John S.',
      route: 'Bangkok → Osaka',
      date: '25 Aug 2026',
      status: 'Confirmed',
    },
  ];
</script>

<div class="overflow-x-auto">
  <table class="w-full min-w-[42rem] border-collapse text-left text-sm">
    <caption class="sr-only">Recent reservations</caption>
    <thead>
      <tr class="border-b-2 border-[#d4dde4] bg-[#e9edf1] text-slate-600">
        <th scope="col" class="border-x-2 border-white px-4 py-3 font-semibold">Reference</th>
        <th scope="col" class="border-r-2 border-white px-4 py-3 font-semibold">Guest</th>
        <th scope="col" class="border-r-2 border-white px-4 py-3 font-semibold">Route</th>
        <th scope="col" class="border-r-2 border-white px-4 py-3 font-semibold">Departure</th>
        <th scope="col" class="border-r-2 border-white px-4 py-3 font-semibold">Status</th>
        <th scope="col" class="w-12 px-4 py-3"><span class="sr-only">Actions</span></th>
      </tr>
    </thead>
    <tbody class="divide-y divide-cloud-200">
      {#each rows as row}
        <tr class="bg-white transition-colors hover:bg-brand-50/60">
          <th scope="row" class="px-4 py-3 font-semibold text-aqua-500">{row.id}</th>
          <td class="px-4 py-3 text-slate-700">{row.guest}</td>
          <td class="px-4 py-3 text-slate-600">{row.route}</td>
          <td class="px-4 py-3 text-slate-600">{row.date}</td>
          <td class="px-4 py-3">
            <Badge
              label={row.status}
              variant={row.status === 'Confirmed'
                ? 'success'
                : row.status === 'Pending'
                  ? 'warning'
                  : 'danger'}
              pill
            />
          </td>
          <td class="px-4 py-2">
            <button
              type="button"
              class="grid size-8 place-items-center rounded-control hover:bg-cloud-200"
              aria-label={`Actions for ${row.id}`}><Icon name="more" size={17} /></button
            >
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
