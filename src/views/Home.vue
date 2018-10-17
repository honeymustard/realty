<template>
  <div class="home">
    <loading v-if="loading"></loading>
    <main class="main" v-else>
      <section class="module">
        <h2 class="module-title">New realties (last 10 days)</h2>
      </section>
      <bar-chart :datum="datum.slice(-10)"></bar-chart>
    </main>
  </div>
</template>

<script>
  import Loading from '@/components/Loading';
  import BarChart from '@/components/BarChart';

  export default {
    data() {
      return {
        datum: [],
        loading: true,
      };
    },
    components: {
      Loading,
      BarChart,
    },
    beforeMount() {
      fetch('/api/datum', {
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
  .main {
    padding-top: 100px;
  }

  .module {
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
  }

  .module-title {
    font-family: 'Noto Sans', sans-serif;
    font-size: 30px;
    line-height: 1.2;
    margin: 0 0 10px;
    color: var(--color-white);
  }
</style>