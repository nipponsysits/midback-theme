<script lang="ts">
  import { onMount } from 'svelte';

  let {
    id = 'component-popover',
    title = 'Popover title',
    message = 'A compact layer for helpful contextual information.',
  }: {
    id?: string;
    title?: string;
    message?: string;
  } = $props();

  let trigger: HTMLButtonElement;
  let panel: HTMLDivElement;
  let open = $state(false);
  let top = $state(0);
  let left = $state(0);

  function place() {
    if (!open || !trigger || !panel) return;
    const triggerRect = trigger.getBoundingClientRect();
    const gap = 8;
    const edge = 12;
    const width = panel.offsetWidth;
    const height = panel.offsetHeight;

    left = Math.min(Math.max(edge, triggerRect.left), window.innerWidth - width - edge);
    top = triggerRect.bottom + gap;
    if (top + height > window.innerHeight - edge) top = triggerRect.top - height - gap;
  }

  function toggle() {
    if (panel.matches(':popover-open')) {
      panel.hidePopover();
    } else {
      panel.showPopover();
      open = true;
      requestAnimationFrame(place);
    }
  }

  onMount(() => {
    const reposition = () => place();
    window.addEventListener('resize', reposition);
    window.addEventListener('scroll', reposition, true);
    return () => {
      window.removeEventListener('resize', reposition);
      window.removeEventListener('scroll', reposition, true);
    };
  });
</script>

<button
  bind:this={trigger}
  type="button"
  aria-controls={id}
  aria-expanded={open}
  class="min-h-9 rounded-control border border-cloud-300 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm hover:bg-cloud-100"
  onclick={toggle}
>
  Open popover
</button>
<div
  bind:this={panel}
  {id}
  popover="auto"
  style={`top:${top}px;left:${left}px`}
  class="fixed z-50 w-72 max-w-[calc(100vw-1.5rem)] rounded-panel border border-cloud-200 bg-white p-4 text-left shadow-panel"
  ontoggle={() => {
    open = panel.matches(':popover-open');
    if (open) requestAnimationFrame(place);
  }}
>
  <h3 class="font-semibold text-slate-800">{title}</h3>
  <p class="mt-1 text-sm text-slate-600">{message}</p>
</div>
