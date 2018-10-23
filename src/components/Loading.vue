<template>
  <div class="loading">
    <div class="loading-icon"></div>
  </div>
</template>

<style lang="postcss">
  @import 'base.css';

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }

  .loading {
    position: fixed;
    z-index: 100;
    top: 30%;
    right: 0;
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
    border-left-color: #5454;
    animation: spin 1.5s linear infinite;
  }
</style>