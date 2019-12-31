<template>
  <div class="register">
    <Register></Register>
  </div>
</template>

<script>
import Register from '../components/Register.vue'

export default {
  name: 'register',
  components: {
    Register
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