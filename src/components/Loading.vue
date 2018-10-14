<template>
  <div class="loading">
    <div class="loading-icon"></div>
  </div>
</template>

<script>
  export default {

  };
</script>

<style lang="postcss">

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }

  .loading {
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--color-blue);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loading-icon {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    border-width: 30px;
    border-style: solid;
    border-color: var(--color-pink);
    border-left-color: var(--color-yellow);
    animation: spin 1.5s linear infinite;
  }
</style>