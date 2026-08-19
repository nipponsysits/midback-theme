<script lang="ts">
  import Button from './Button.svelte';

  let visible = $state(true);
  const directions = ['base-left', 'base-right'] as const;

  function show() {
    visible = true;
  }

  function hide() {
    visible = false;
  }
</script>

<div
  class="flex flex-wrap items-center justify-between gap-4 border-b border-cloud-200 bg-white p-4"
>
  <div class="flex items-center gap-2">
    <Button label="Show" variant="primary" onclick={show} disabled={visible} />
    <Button label="Hide" onclick={hide} disabled={!visible} />
  </div>
  <span class="text-xs text-slate-500" role="status" aria-live="polite">
    {visible ? 'Shown · height 4px' : 'Hidden · height 0px'}
  </span>
</div>

<div class="overflow-hidden bg-cloud-50">
  <div class="material-preloader" style:height={visible ? '4px' : '0px'} aria-hidden={!visible}>
    {#each directions as direction}
      <div class="load-bar-container">
        <div class="load-bar-base {direction}">
          <span class="color red"></span>
          <span class="color blue"></span>
          <span class="color yellow"></span>
          <span class="color green"></span>
        </div>
      </div>
    {/each}
  </div>

  <div class="px-5 py-6">
    <p class="font-semibold text-slate-700">Preview surface</p>
    <p class="mt-1 text-sm text-slate-500">
      The preloader stays flush with this preview’s top edge and collapses without leaving a gap.
    </p>
  </div>
</div>

<style>
  .material-preloader {
    display: flex;
    width: 100%;
    overflow: hidden;
    background: #159756;
    opacity: 1;
    transition:
      height 250ms ease,
      opacity 180ms ease;
  }

  .material-preloader[aria-hidden='true'] {
    opacity: 0;
  }

  .load-bar-container {
    width: 50%;
    height: 4px;
    overflow: hidden;
  }

  .load-bar-base {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #159756;
  }

  .color {
    position: absolute;
    inset: 0;
    display: block;
  }

  .material-preloader[aria-hidden='false'] .color {
    will-change: transform;
  }

  .material-preloader[aria-hidden='true'] .color {
    animation-play-state: paused;
  }

  .red {
    background: #da4733;
  }

  .blue {
    background: #3b78e7;
  }

  .yellow {
    background: #fdba2c;
  }

  .green {
    background: #159756;
  }

  .base-left .red {
    animation: move-left-red 4s infinite linear;
  }

  .base-left .blue {
    animation: move-left-blue 4s infinite linear;
  }

  .base-left .yellow {
    animation: move-left-yellow 4s infinite linear;
  }

  .base-left .green {
    animation: move-left-green 4s infinite linear;
  }

  .base-right .red {
    animation: move-right-red 4s infinite linear;
  }

  .base-right .blue {
    animation: move-right-blue 4s infinite linear;
  }

  .base-right .yellow {
    animation: move-right-yellow 4s infinite linear;
  }

  .base-right .green {
    animation: move-right-green 4s infinite linear;
  }

  @keyframes move-left-red {
    0% {
      transform: translateX(100%);
    }
    25%,
    50%,
    75%,
    100% {
      transform: translateX(0);
    }
  }

  @keyframes move-left-blue {
    0%,
    25% {
      transform: translateX(100%);
    }
    50%,
    75%,
    100% {
      transform: translateX(0);
    }
  }

  @keyframes move-left-yellow {
    0%,
    25%,
    50% {
      transform: translateX(100%);
    }
    75%,
    100% {
      transform: translateX(0);
    }
  }

  @keyframes move-left-green {
    0%,
    25%,
    50%,
    75% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes move-right-red {
    0% {
      transform: translateX(-100%);
    }
    25%,
    50%,
    75%,
    100% {
      transform: translateX(0);
    }
  }

  @keyframes move-right-blue {
    0%,
    25% {
      transform: translateX(-100%);
    }
    50%,
    75%,
    100% {
      transform: translateX(0);
    }
  }

  @keyframes move-right-yellow {
    0%,
    25%,
    50% {
      transform: translateX(-100%);
    }
    75%,
    100% {
      transform: translateX(0);
    }
  }

  @keyframes move-right-green {
    0%,
    25%,
    50%,
    75% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
</style>
