<template>
  <svg class="logo" viewBox="0 0 140.5 150.5" x="0.5" y="0.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <polygon points="0.5,0.5 0.5,30 10.5,30 10.5,120 0.5,120 0.5,150 60.5,150, 60.5,120, 50.5,120 50.5,90.5 90.5,90.5 90.5,120 80.5,120, 80.5,150 140.5,150 140.5,120 130.5,120 130.5,30 140.5,30, 140.5,0.5 80.5,0.5, 80.5,30.5, 90.5,30.5, 90.5,60.5, 50.5,60.5 50.5,30.5 60.5,30.5 60.5,0.5" />
  </svg>
</template>

<style lang="postcss">
  @import 'base.css';

  .logo {
    max-width: 100%;
    display: block;

    & polygon {
      fill: var(--color-blue);
    }
  }
</style>