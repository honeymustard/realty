<template>
  <div class="home">
    <loading v-if="loading"></loading>
    <main class="main" v-else>
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
  import Loading from '@/components/Loading';
  import Heading from '@/components/Heading';
  import Footing from '@/components/Footing';
  import BarChart from '@/components/BarChart';

  export default {
    data() {
      return {
        loading: true,
        chartTitle: 'Listings per day (last 10 days)',
      };
    },
    components: {
      Loading,
      Heading,
      Footing,
      BarChart,
    },
    computed: {
      ...mapGetters({
        datum: 'getDatum',
      }),
    },
    beforeMount() {
      this.$store.dispatch('fetchDatum')
        .then(() => {
          setTimeout(() => this.loading = false, 300);
        });
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