<script lang="ts">
  import Button from '../core/Button.svelte';
  let dialog: HTMLDialogElement;
</script>

<Button label="Preview exception" variant="danger" onclick={() => dialog.showModal()} />

<dialog
  bind:this={dialog}
  class="m-auto w-[calc(100%-2rem)] max-w-2xl overflow-hidden rounded-control border-0 bg-white p-0 shadow-[0_20px_13px_-20px_rgb(0_0_0_/_0.2),0_6px_20px_rgb(0_0_0_/_0.19)]"
>
  <div class="bg-[#d45659] text-white">
    <h3 class="border-b-2 border-[#cb4d50] px-4 py-4 text-[1.625rem] font-medium">
      We couldn’t complete that request
    </h3>
    <div class="min-h-[5.75rem] border-t border-[#e8676b] px-[1.125rem] py-3">
      <p>
        The reservation service returned an unexpected response. Your unsaved changes are still
        available.
      </p>
      <p class="mt-5 text-xs text-white/75">Status 503 · Request TVX-RQ-4182</p>
    </div>
  </div>
  <div class="flex justify-end gap-2 px-6 py-3.5">
    <Button label="View details" size="sm" /><Button
      label="Try again"
      size="sm"
      variant="primary"
      onclick={() => dialog.close()}
    />
  </div>
</dialog>
