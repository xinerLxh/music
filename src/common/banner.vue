<template>
    <div class="banner">
        <ul>
            <router-link v-for="(banner,index) in bannerList" tag="li" to="" :key="index">
                <img :src="banner.pic"/>
            </router-link>
            <li class="clearfloat"></li>
        </ul>
    </div>
</template>

<script>
export default {
  created () {
    console.log('111')
    this.$http.get('http://127.0.0.1:3000/banner').then(res => {
      console.log(res.data)
      if (res.data.code === 200) {
        this.bannerList = res.data.banners
      }
    })
  },
  data () {
    return {
      bannerList: []
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.banner
    width:100%
   ul
     position:relative
     display:flex
     justify-content:space-between
     width:600%
   li
     float:left
  .clearfloat
     clear:both
   img
      width:100%;
</style>