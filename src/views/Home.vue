<template>
  <div class="home">
    <loading v-if="loading"></loading>
    <graph v-else :datum="datum"></graph>
  </div>
</template>

<script>
  import Loading from '@/components/Loading';
  import Graph from '@/components/Graph';

  export default {
    data() {
      return {
        datum: [],
        loading: true,
      };
    },
    components: {
      Loading,
      Graph,
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