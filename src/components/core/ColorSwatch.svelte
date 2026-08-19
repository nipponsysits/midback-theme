<script lang="ts">
  let {
    name,
    light,
    dark,
  }: {
    name: string;
    light: string;
    dark: string;
  } = $props();
</script>

<article class="overflow-hidden rounded-panel border border-cloud-200 bg-white">
  <div class="grid h-20 grid-cols-2">
    <div style={`background:${light}`} title={light}></div>
    <div style={`background:${dark}`} title={dark}></div>
  </div>
  <div class="px-4 py-3">
    <h3 class="text-xs font-bold tracking-[0.1em] text-slate-700">{name}</h3>
    <p class="mt-1 font-mono text-xs text-slate-500">{light} · {dark}</p>
  </div>
</article>
