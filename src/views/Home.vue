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
  import Loading from '@/components/Loading';
  import Heading from '@/components/Heading';
  import Footing from '@/components/Footing';
  import BarChart from '@/components/BarChart';

  export default {
    data() {
      return {
        datum: [],
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
    beforeMount() {
      fetch('/api/datum/latest', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      })
      .then(response => response.json())
      .then(datum => {
        this.$store.commit('setDatum', datum);
        this.datum = datum;

        setTimeout(() => this.loading = false, 300);
      });
    },
  };
</script>

<style lang="postcss">
  @custom-media --grid-md-up (min-width: 768px);

  .row {
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
    padding: 0 15px;
    position: relative;
  }
</style>