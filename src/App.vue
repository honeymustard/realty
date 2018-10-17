<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="postcss">
  @import '~normalize.css/normalize.css';

  :root {
    --color-blue: #07d;
    --color-yellow: #ff5;
    --color-pink: #f8d;
    --color-gray: #ddd;
    --color-white: #fff;
    --color-black: #000;
  }

  body {
    background-color: var(--color-blue);
  }
</style>