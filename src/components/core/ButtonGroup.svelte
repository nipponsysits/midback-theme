<script lang="ts">
  import Button from './Button.svelte';

  let {
    orientation = 'horizontal',
  }: {
    orientation?: 'horizontal' | 'vertical';
  } = $props();
</script>

<div
  class={orientation === 'horizontal'
    ? 'inline-flex [&>*:not(:first-child)]:-ml-px [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none'
    : 'inline-flex flex-col [&>*:not(:first-child)]:-mt-px [&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none'}
  role="group"
  aria-label="View options"
>
  <Button label="List" icon="menu" />
  <Button label="Dashboard" icon="dashboard" />
  <Button label="Settings" icon="settings" />
</div>
