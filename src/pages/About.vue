<template>
  <div class="about">
    
    <div class="about-txt">注册并登录成功后，</div>
    <div class="about-txt">会自动跳转到信息查询页面，</div>
    <div class="about-txt">同时导航菜单会多出用户栏，</div>
    <div class="about-txt">祝您玩得愉快 : )</div>
    <Stars></Stars>
  </div>
</template>

<script>
import Stars from '../components/Stars.vue'

export default {
  name: 'about',
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

