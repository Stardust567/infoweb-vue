<template>
  <div class="home">
    <Login></Login>
  </div>
</template>

<script>
import Login from '../components/Login.vue'

export default {
  name: 'home',
  components: {
    Login
  }
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
