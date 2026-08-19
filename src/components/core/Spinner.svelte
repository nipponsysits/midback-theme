<script lang="ts">
  let { label = 'Loading', size = 'md' }: { label?: string; size?: 'sm' | 'md' | 'lg' } = $props();
  const sizes = { sm: 'size-4 border-2', md: 'size-6 border-[3px]', lg: 'size-9 border-4' };
</script>

<span
  class="inline-block animate-spin rounded-full border-brand-200 border-t-brand-600 {sizes[size]}"
  role="status"
  aria-label={label}
></span>
