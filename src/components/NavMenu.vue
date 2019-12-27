<template>
  <div class="NavMenu">
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        router=true
        background-color="#409EFF"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="/" router=true>首页</el-menu-item>
        <el-menu-item index="about" >关于</el-menu-item>
        <el-menu-item index="4"><a href="https://stardust567.github.io/" target="_blank">友链</a></el-menu-item>
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
</style>
