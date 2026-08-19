<script lang="ts">
  import Icon from '../core/Icon.svelte';

  let editor: HTMLDivElement;

  function wrapSelection(tagName: 'strong' | 'em' | 'code') {
    const selection = window.getSelection();
    if (!selection?.rangeCount || selection.isCollapsed) return;
    const range = selection.getRangeAt(0);
    const wrapper = document.createElement(tagName);
    try {
      range.surroundContents(wrapper);
    } catch {
      wrapper.append(range.extractContents());
      range.insertNode(wrapper);
    }
    selection.removeAllRanges();
    selection.addRange(range);
    editor.focus();
  }
</script>

<div
  class="overflow-hidden rounded-control border border-cloud-300 bg-white focus-within:border-bluejeans-500"
>
  <div
    class="flex gap-1 border-b border-cloud-200 bg-cloud-100 p-2"
    role="toolbar"
    aria-label="Text formatting"
  >
    <button
      type="button"
      class="grid size-8 place-items-center rounded font-serif font-bold hover:bg-cloud-200"
      aria-label="Bold"
      onmousedown={(event) => {
        event.preventDefault();
        wrapSelection('strong');
      }}>B</button
    >
    <button
      type="button"
      class="grid size-8 place-items-center rounded font-serif italic hover:bg-cloud-200"
      aria-label="Italic"
      onmousedown={(event) => {
        event.preventDefault();
        wrapSelection('em');
      }}>I</button
    >
    <button
      type="button"
      class="grid size-8 place-items-center rounded hover:bg-cloud-200"
      aria-label="Inline code"
      onmousedown={(event) => {
        event.preventDefault();
        wrapSelection('code');
      }}><Icon name="code" size={16} /></button
    >
  </div>
  <div
    bind:this={editor}
    contenteditable="true"
    role="textbox"
    aria-multiline="true"
    aria-label="Message body"
    class="min-h-36 p-4 text-sm outline-none empty:before:pointer-events-none empty:before:text-slate-400 empty:before:content-['Write_a_message…'] [&_code]:rounded [&_code]:bg-cloud-200 [&_code]:px-1 [&_code]:font-mono"
  >
    Select text, then apply formatting.
  </div>
</div>
