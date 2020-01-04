<template>
  <div class="user">
    <Query></Query>
  </div>
</template>

<script>
import Query from '../components/Query.vue'

export default {
  name: 'user',
  components: {
    Query
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #409EFF;
}
</style>