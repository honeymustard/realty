<template>
  <div class="home">
  </div>
</template>

<script>
  export default {
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
      });
   },
  };
</script>