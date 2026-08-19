<script lang="ts">
  import Icon from '../core/Icon.svelte';

  let { id = 'file-upload' }: { id?: string } = $props();
  let fileName = $state('');
  let dragging = $state(false);

  function setFile(files: FileList | null) {
    fileName = files?.[0]?.name ?? '';
  }
</script>

<label
  for={id}
  class="flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-panel border-2 border-dashed p-6 text-center transition {dragging
    ? 'border-brand-500 bg-brand-50'
    : 'border-cloud-300 bg-cloud-50 hover:border-brand-400 hover:bg-brand-50/50'}"
  ondragenter={(event) => {
    event.preventDefault();
    dragging = true;
  }}
  ondragover={(event) => event.preventDefault()}
  ondragleave={() => (dragging = false)}
  ondrop={(event) => {
    event.preventDefault();
    dragging = false;
    setFile(event.dataTransfer?.files ?? null);
  }}
>
  <input
    {id}
    type="file"
    class="sr-only"
    onchange={(event) => setFile(event.currentTarget.files)}
  />
  <span class="grid size-11 place-items-center rounded-full bg-brand-100 text-brand-700">
    <Icon name={fileName ? 'file' : 'upload'} size={21} />
  </span>
  <span class="mt-3 font-semibold text-slate-700">{fileName || 'Drop a file here or browse'}</span>
  <span class="mt-1 text-xs text-slate-500">PDF, PNG, JPG up to 10 MB</span>
</label>
