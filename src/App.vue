<template>
  <div id="app">
    <NavMenu></NavMenu>
    <router-view></router-view>
  </div>
</template>

<script>
import NavMenu from './components/NavMenu.vue'

export default {
  name: 'app',
  components: {
    NavMenu
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
