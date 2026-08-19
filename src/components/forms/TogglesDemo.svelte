<script lang="ts">
  import Toggle from './Toggle.svelte';
</script>

<div class="flex flex-col gap-4">
  <Toggle id="email-toggle" label="Email notifications" checked />
  <Toggle id="sms-toggle" label="SMS notifications" />
</div>
