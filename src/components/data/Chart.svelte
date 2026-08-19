<script lang="ts">
  let {
    type = 'bar',
    label = 'Monthly reservations',
  }: {
    type?: 'bar' | 'line';
    label?: string;
  } = $props();

  const values = [42, 58, 46, 72, 66, 84, 78];
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const points = values.map((value, index) => `${28 + index * 43},${112 - value}`).join(' ');
</script>

<figure class="rounded-panel border border-cloud-200 bg-white p-4 shadow-sm">
  <figcaption class="mb-4 flex items-end justify-between gap-4">
    <div>
      <p class="text-xs font-semibold uppercase tracking-wide text-slate-400">Last 7 days</p>
      <h3 class="mt-0.5 font-semibold text-slate-700">{label}</h3>
    </div>
    <span class="text-2xl font-semibold text-slate-800">446</span>
  </figcaption>
  <svg
    viewBox="0 0 320 140"
    class="h-auto w-full"
    role="img"
    aria-label={`${label}, ${type} chart`}
  >
    <g stroke="#e6e9ed" stroke-width="1">
      <line x1="18" y1="28" x2="310" y2="28" /><line x1="18" y1="68" x2="310" y2="68" /><line
        x1="18"
        y1="108"
        x2="310"
        y2="108"
      />
    </g>
    {#if type === 'bar'}
      {#each values as value, index}<rect
          x={19 + index * 43}
          y={112 - value}
          width="20"
          height={value}
          rx="3"
          fill={index === 5 ? '#78bb34' : '#5d9cec'}
        />{/each}
    {:else}
      <polyline
        {points}
        fill="none"
        stroke="#78bb34"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      {#each values as value, index}<circle
          cx={28 + index * 43}
          cy={112 - value}
          r="3.5"
          fill="#fff"
          stroke="#78bb34"
          stroke-width="2.5"
        />{/each}
    {/if}
    {#each labels as day, index}<text
        x={29 + index * 43}
        y="132"
        text-anchor="middle"
        fill="#8e98a7"
        font-size="8">{day}</text
      >{/each}
  </svg>
</figure>
