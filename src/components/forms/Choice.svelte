<script lang="ts">
  import Icon from '../core/Icon.svelte';

  let {
    id,
    label,
    type = 'checkbox',
    name,
    checked = false,
    disabled = false,
  }: {
    id: string;
    label: string;
    type?: 'checkbox' | 'radio';
    name?: string;
    checked?: boolean;
    disabled?: boolean;
  } = $props();
</script>

<label
  for={id}
  class="group inline-flex w-fit cursor-pointer items-center gap-2.5 text-sm text-slate-700 has-disabled:cursor-not-allowed has-disabled:opacity-50"
>
  <input {id} {type} {name} {checked} {disabled} class="peer sr-only" />
  {#if type === 'checkbox'}
    <span
      class="grid size-5 shrink-0 place-items-center rounded-[0.25rem] border border-cloud-300 bg-white text-white shadow-sm transition group-hover:border-brand-400 peer-checked:border-brand-500 peer-checked:bg-brand-500 peer-focus-visible:ring-4 peer-focus-visible:ring-bluejeans-400/20 peer-checked:[&_svg]:opacity-100"
      aria-hidden="true"
    >
      <Icon name="check" size={14} strokeWidth={3} class="opacity-0 transition-opacity" />
    </span>
  {:else}
    <span
      class="grid size-5 shrink-0 place-items-center rounded-full border border-cloud-300 bg-white shadow-sm transition group-hover:border-brand-400 peer-checked:border-brand-500 peer-focus-visible:ring-4 peer-focus-visible:ring-bluejeans-400/20 peer-checked:[&>span]:opacity-100"
      aria-hidden="true"
    >
      <span class="size-2.5 rounded-full bg-brand-500 opacity-0 transition-opacity"></span>
    </span>
  {/if}
  <span>{label}</span>
</label>
