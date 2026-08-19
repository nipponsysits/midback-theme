<script lang="ts">
  import Button from '../core/Button.svelte';
  import Icon from '../core/Icon.svelte';
  let modal: HTMLDialogElement;
</script>

<Button label="Open modal" variant="primary" onclick={() => modal.showModal()} />

<dialog
  bind:this={modal}
  class="m-auto w-[calc(100%-2rem)] max-w-lg overflow-hidden rounded-panel border-0 bg-white p-0 text-left text-slate-700 shadow-2xl"
  onclose={() => undefined}
  onclick={(event) => {
    if (event.target === modal) modal.close();
  }}
>
  <header class="flex items-center justify-between border-b border-cloud-200 px-5 py-4">
    <div>
      <h3 class="text-lg font-semibold text-slate-800">Confirm reservation</h3>
      <p class="mt-0.5 text-xs text-slate-500">TVX-2026-1842</p>
    </div>
    <button
      type="button"
      class="grid size-8 place-items-center rounded-control hover:bg-cloud-100"
      aria-label="Close modal"
      onclick={() => modal.close()}><Icon name="x" size={18} /></button
    >
  </header>
  <div class="p-5">
    <p class="text-sm text-slate-600">
      Issue tickets for Araya Ch. and send the itinerary to the primary email address?
    </p>
  </div>
  <footer class="flex justify-end gap-2 border-t border-cloud-200 bg-cloud-50 px-5 py-4">
    <Button label="Cancel" size="sm" onclick={() => modal.close()} /><Button
      label="Confirm"
      size="sm"
      variant="primary"
      onclick={() => modal.close()}
    />
  </footer>
</dialog>
