<script lang="ts">
  import Icon from '../core/Icon.svelte';

  let {
    id = 'quantity-stepper',
    label = 'Quantity',
    min = 0,
    max = 99,
    value = 1,
  }: {
    id?: string;
    label?: string;
    min?: number;
    max?: number;
    value?: number;
  } = $props();

  // svelte-ignore state_referenced_locally -- this prop intentionally seeds local editable state
  let amount = $state(value);
  const decrement = () => (amount = Math.max(min, amount - 1));
  const increment = () => (amount = Math.min(max, amount + 1));
</script>

<div>
  <label for={id} class="mb-1.5 block text-sm font-semibold text-slate-700">{label}</label>
  <div class="inline-flex rounded-control">
    <button
      type="button"
      class="grid size-9 place-items-center rounded-l-control border border-cloud-300 bg-cloud-100 text-slate-700 hover:bg-cloud-200 disabled:opacity-50"
      aria-label="Decrease quantity"
      disabled={amount <= min}
      onclick={decrement}><Icon name="minus" size={15} /></button
    >
    <input
      {id}
      type="number"
      {min}
      {max}
      bind:value={amount}
      class="h-9 w-16 border-y border-cloud-300 bg-white text-center font-semibold text-slate-700 outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
    />
    <button
      type="button"
      class="grid size-9 place-items-center rounded-r-control border border-cloud-300 bg-cloud-100 text-slate-700 hover:bg-cloud-200 disabled:opacity-50"
      aria-label="Increase quantity"
      disabled={amount >= max}
      onclick={increment}><Icon name="plus" size={15} /></button
    >
  </div>
</div>
