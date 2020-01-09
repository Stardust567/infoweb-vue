<template>
  <div class="git">
    
    <div class="about-txt">想了解代码实现的话，</div>
    <div class="about-txt">欢迎Star我的Github，</div>
    <div class="about-txt"><a href="https://github.com/Stardust567?tab=repositories" target="_blank">点击进入我的仓库</a></div>
    <Stars></Stars>
  </div>
</template>

<script>
import Stars from '../components/Stars.vue'

export default {
  name: 'git',
  components: {
    Stars,
  }
}
</script>

<style>
  .about-txt {
    padding-top: 5%;
    font-size: 25px;
    color: #909399;
  }
</style>

