<template>
  <div class="graph">
    <span v-for="data in datum" :key="data.date">{{data.date}} {{data.value}}</span>
  </div>
</template>

<script>
  export default {
    props: {
      datum: {
        type: Array,
        required: true,
      }
    }
  };
</script>

<style>

</style>