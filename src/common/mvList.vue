<template>
    <div>
        <h2>{{title}}</h2>
        <ul>
            <router-link v-for="(mv,index) in mvData"            :key='index' tag="li" to="/play">
              <div v-if="index<6">
                <img :src="mv.picUrl" />
                <p class="title">{{mv.name}}</p>
                <span class="listenCount">
                    {{mv.playCount > 10000?Math.floor(mv.playCount/10000)+"万":mv.playCount}}
                </span>
              </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
  props: ['mvData', 'title'],
  data () {
    return {
      musicList: []
    }
  }
}
</script>

<style scoped lang="stylus">
@import "~assets/stylus/variable"

h2
  margin:2% 0%
  font-size:$font-size-nav
ul
  width:100%
  display:flex
  flex-wrap:wrap
  justify-content:space-between
 li
  width:50%
  position:relative
  img
   width:98%
 .title
   //-webkit-line-clamp: 2;
   //-webkit-box-orient: vertical;
   overflow: hidden;
   padding: 4px 2px;
   font-size:$font-size-title
   line-height:1.2
   width:98%
   overflow:hidden
 .listenCount
   position:absolute
   color:#fff
   top:2%
   right:3%
   font-size:$font-size-listen
</style>