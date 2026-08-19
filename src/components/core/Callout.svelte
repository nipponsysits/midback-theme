<script lang="ts">
  let {
    title,
    message,
    variant = 'info',
  }: {
    title: string;
    message: string;
    variant?: 'info' | 'danger';
  } = $props();
  const variants = {
    info: 'border-l-aqua-500 [&_h3]:text-[#287b9b]',
    danger: 'border-l-[#c0392b] [&_h3]:text-[#a73442]',
  };
</script>

<aside class="rounded-panel border border-cloud-200 border-l-4 bg-white p-4 {variants[variant]}">
  <h3 class="font-semibold">{title}</h3>
  <p class="mt-1 text-sm text-slate-600">{message}</p>
</aside>
