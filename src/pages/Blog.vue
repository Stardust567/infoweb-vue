<template>
  <div class="blog">
    
    <div class="about-txt">想知道更多讯息的话，</div>
    <div class="about-txt">欢迎关注我的博客哦，</div>
    <div class="about-txt"><a href="https://stardust567.github.io/" target="_blank">STAR TRAIL</a></div>
    <Stars></Stars>
  </div>
</template>

<script>
import Stars from '../components/Stars.vue'

export default {
  name: 'blog',
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

