<template>
  <div class="NavMenu">
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        router=true
        background-color="#409EFF"
        text-color="#fff"
        active-text-color="#ffd04b"
        >
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="about">关于</el-menu-item>
        <el-menu-item index="4"><a href="https://stardust567.github.io/" target="_blank">友链</a></el-menu-item>
        <el-menu-item index="5"><a href="https://github.com/Stardust567?tab=repositories" target="_blank">Git</a></el-menu-item>
        <el-menu-item index="user"> {{ $store.getters.user_name }} </el-menu-item>
        
    </el-menu>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
}
</script>

<style>
.NavMenu {
    margin: 10px 10px 20px 10px;
  }

.el-menu-item {
    padding-left: 4% !important;
    padding-right: 4% !important;
    font-size: 120% !important;
    font-family: "Hiragino Sans GB";
    line-height: 1.5;
  }

</style>
