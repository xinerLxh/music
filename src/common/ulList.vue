<template>
    <div>
        <h2>{{title}}</h2>
        <ul>
          <router-link v-for="(music,index) in musicData" :key='index' tag="li" to="/play">
            <p class="title">{{music.song.name}}</p>
            <p class="musicInfo">
              {{music.song.artists[0].name+" - "+music.song.name}}
            </p>
            <p class="play"></p>
          </router-link>
        </ul>
    </div>
</template>

<script>
export default {
  props: ['musicData', 'title'],
  created () {
    console.log(this.musicData)
  },
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
 li
  width:100%
  position:relative
  margin:0% 0% 0% 3%
  border-bottom:1px solid $color-title
 .musicInfo
   font-size:$font-size-listen
   color:$color-title
   padding:2% 0%
 .play
   position:absolute
   height:100%
   width:10%
   background:url('../assets/image/playbar_btn_play.png') no-repeat
   background-size:contain
   right:2%
   bottom:-5px
 .title
   padding: 4px 2px;
   font-size:$font-size-nav
   line-height:1.2
   width:98%
</style>