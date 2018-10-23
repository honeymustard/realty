<template>
  <div class="home" v-if="!loading">
    <main class="main">
      <heading></heading>
      <section class="row">
        <bar-chart :datum="datum" :title="chartTitle"></bar-chart>
      </section>
      <section class="row">
        <footing></footing>
      </section>
    </main>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Heading from '@/components/Heading';
  import Footing from '@/components/Footing';
  import BarChart from '@/components/BarChart';

  export default {
    data() {
      return {
        chartTitle: 'Listings per day (last 10 days)',
      };
    },
    components: {
      Heading,
      Footing,
      BarChart,
    },
    computed: {
      ...mapGetters({
        loading: 'getLoading',
        datum: 'getDatum',
      }),
    },
    beforeMount() {
      this.$store.dispatch('fetchDatum');
    },
  };
</script>

<style lang="postcss">
  .row {
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
    padding: 0 15px;
    position: relative;
  }
</style>