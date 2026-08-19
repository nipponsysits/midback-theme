<script lang="ts">
  import Icon from '../core/Icon.svelte';
  const slides = [
    {
      id: 'slide-1',
      label: 'Operations',
      title: 'Keep today’s departures on track',
      icon: 'calendar' as const,
      colors: 'from-bluejeans-500 to-aqua-500',
    },
    {
      id: 'slide-2',
      label: 'Customers',
      title: 'Every traveller detail in one place',
      icon: 'users' as const,
      colors: 'from-lavender-500 to-pinkrose-500',
    },
    {
      id: 'slide-3',
      label: 'Finance',
      title: 'Clear payment and revenue signals',
      icon: 'card' as const,
      colors: 'from-brand-500 to-mint-500',
    },
  ];
</script>

<div class="relative overflow-hidden rounded-panel">
  <div class="hide-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth">
    {#each slides as slide}
      <article
        id={slide.id}
        class="grid min-w-full snap-center place-items-center bg-gradient-to-br px-8 py-16 text-center text-white {slide.colors}"
      >
        <Icon name={slide.icon} size={42} strokeWidth={1.5} />
        <p class="mt-4 text-xs font-bold uppercase tracking-[0.18em] opacity-80">{slide.label}</p>
        <h3 class="mt-2 max-w-md text-2xl font-semibold">{slide.title}</h3>
      </article>
    {/each}
  </div>
  <nav class="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2" aria-label="Carousel slides">
    {#each slides as slide, index}<a
        href={`#${slide.id}`}
        class="size-2.5 rounded-full border border-white bg-white/50 hover:bg-white"
        aria-label={`Go to slide ${index + 1}`}
      ></a>{/each}
  </nav>
</div>
