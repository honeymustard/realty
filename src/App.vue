<template>
  <div id="app">
    <loading v-if="loading"></loading>
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Loading from '@/components/Loading';

  export default {
    components: {
      Loading,
    },
    computed: {
      ...mapGetters({
        loading: 'getLoading',
      }),
    },
  }
</script>

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