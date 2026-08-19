<script lang="ts">
  let {
    id,
    label,
    checked = false,
    disabled = false,
  }: {
    id: string;
    label: string;
    checked?: boolean;
    disabled?: boolean;
  } = $props();

  // svelte-ignore state_referenced_locally -- this prop intentionally seeds local editable state
  let enabled = $state(checked);
</script>

<label for={id} class="inline-flex items-center gap-3 text-sm font-medium text-slate-700">
  <input {id} type="checkbox" class="peer sr-only" bind:checked={enabled} {disabled} />
  <span
    class="relative h-6 w-11 rounded-full bg-cloud-300 transition-colors after:absolute after:left-0.5 after:top-0.5 after:size-5 after:rounded-full after:bg-white after:shadow-sm after:transition-transform peer-checked:bg-brand-500 peer-checked:after:translate-x-5 peer-focus-visible:ring-4 peer-focus-visible:ring-bluejeans-400/20 peer-disabled:opacity-50"
  ></span>
  <span>{label} <span class="font-normal text-slate-500">({enabled ? 'On' : 'Off'})</span></span>
</label>
