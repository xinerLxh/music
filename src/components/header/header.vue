<template>
      <div class="header">
        <my-log></my-log>
        <ul class="list">
          <li :key="index" v-for="(nav,index) in navList">
            <router-link tag="a" :to="nav.to">
                {{nav.name}}
            </router-link>
          </li>
        </ul>
        <router-view></router-view>
      </div>
</template>

<script >
export default {
  data () {
    return {
      navList: [
        { name: '推荐音乐', to: '/recommened' },
        { name: '热搜榜', to: '/hotSearch' },
        { name: '排行榜', to: '/rankList' },
        { name: '搜索', to: '/search' }
      ]
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~assets/stylus/variable"
.header
   width:100%
 .list
    width:100%
    display:flex
    justify-content:space-between
    list-style-type:none
    border-bottom:1px solid gray
  li
    width:25%
    text-align:center
   a
     display:inline-block
     color:#333
     font-size:15px
     line-height:40px
     height:40px
     overflow:hidden
     width:75%
   a.router-link-active
      color:$color-highlight
      border-bottom:2px solid $color-highlight
</style>