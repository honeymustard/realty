<template>
  <div class="missing">
    <h1 class="missing-title">
      <router-link class="missing-link" to="/">404</router-link>
    </h1>
  </div>
</template>

<script>
  export default {

  };
</script>

<style lang="postcss">
  @custom-media --grid-md-up (min-width: 768px);

  .missing {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .missing-title {
    font-size: 50px;
    font-family: 'Noto Sans', sans-serif;
    text-align: center;
    margin: 60px 0 0;

    @media (--grid-md-up) {
      font-size: 80px;
      margin: 80px 0 0;
    }
  }

  .missing-link {
    color: var(--color-yellow);
    text-decoration: none;
  }
</style>