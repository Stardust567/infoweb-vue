<template>
  <div class="Hello">
    <el-carousel height="580px" interval="8000">
      <el-carousel-item v-for="image in images" :key="image">
        <el-image :src=image>
          <div slot="placeholder" class="image-slot">加载中<span class="dot">...</span></div>
        </el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        items : [1, 2, 3, 4],
        src: 'https://i.loli.net/2020/01/01/D2AePu985BUzCZL.png',//'https://i.loli.net/2020/01/01/NGFwHb3Zt78K2z4.jpg'
        images : [
                'https://i.loli.net/2020/01/04/VteR8kJXdKlC4Yx.jpg',
                'https://i.loli.net/2020/01/04/HmyhVcps7fo3Y9A.jpg',
                'https://i.loli.net/2020/01/04/5LhIBfgN7H1Gw2k.jpg',
                'https://i.loli.net/2020/01/01/NGFwHb3Zt78K2z4.jpg',
                
            ]
      }
    },
    components: {
    }
  }
</script>