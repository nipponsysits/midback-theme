<script lang="ts">
  import Icon from '../core/Icon.svelte';
  import type { IconName } from '../core/icon-types';

  let {
    id,
    label,
    type = 'text',
    placeholder = '',
    value = '',
    hint,
    error,
    icon,
    disabled = false,
    required = false,
  }: {
    id: string;
    label: string;
    type?: 'text' | 'email' | 'password' | 'search' | 'date' | 'time';
    placeholder?: string;
    value?: string;
    hint?: string;
    error?: string;
    icon?: IconName;
    disabled?: boolean;
    required?: boolean;
  } = $props();

  const messageId = $derived(hint || error ? `${id}-message` : undefined);
</script>

<div>
  <label for={id} class="mb-1.5 block text-sm font-semibold text-slate-700">
    {label}{#if required}<span class="ml-1 text-grapefruit-500" aria-hidden="true">*</span>{/if}
  </label>
  <div class="relative">
    {#if icon}
      <Icon
        name={icon}
        size={16}
        class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
      />
    {/if}
    <input
      {id}
      {type}
      {placeholder}
      {value}
      {disabled}
      {required}
      aria-invalid={error ? 'true' : undefined}
      aria-describedby={messageId}
      style={icon ? 'padding-left:2.5rem' : undefined}
      class="control-base disabled:cursor-not-allowed disabled:bg-cloud-200 disabled:text-slate-400 {error
        ? '!border-[#c0392b]'
        : ''}"
    />
  </div>
  {#if hint || error}
    <p id={messageId} class="mt-1.5 text-xs {error ? 'text-[#c0392b]' : 'text-slate-500'}">
      {error ?? hint}
    </p>
  {/if}
</div>
