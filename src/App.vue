<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="postcss">
  @import 'normalize.css';
  @import 'base.css';

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    background-color: var(--color-blue);
  }
</style>