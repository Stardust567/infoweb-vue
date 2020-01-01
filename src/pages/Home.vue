<template>
  <div class="home">
    <el-container>
      <el-aside width="25%">
        <Login></Login>
      </el-aside>
      <el-main >
        <Hello></Hello>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Login from '../components/Login.vue'
import Hello from '../components/Hello.vue'

export default {
  name: 'home',
  components: {
    Login,
    Hello,
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
