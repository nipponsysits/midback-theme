<script lang="ts">
  let {
    label,
    position = 'top',
    text = 'Hover or focus me',
  }: {
    label: string;
    position?: 'top' | 'right' | 'bottom' | 'left';
    text?: string;
  } = $props();

  const positions = {
    top: 'bottom-[calc(100%+0.55rem)] left-1/2 -translate-x-1/2',
    right: 'left-[calc(100%+0.55rem)] top-1/2 -translate-y-1/2',
    bottom: 'left-1/2 top-[calc(100%+0.55rem)] -translate-x-1/2',
    left: 'right-[calc(100%+0.55rem)] top-1/2 -translate-y-1/2',
  };
</script>

<span class="group relative inline-flex">
  <button
    type="button"
    class="rounded-control border border-cloud-300 bg-white px-3 py-2 text-sm shadow-sm"
  >
    {text}
  </button>
  <span
    role="tooltip"
    class="pointer-events-none invisible absolute z-20 w-max max-w-48 rounded bg-slate-900 px-2.5 py-1.5 text-center text-xs text-white opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 {positions[
      position
    ]}">{label}</span
  >
</span>
