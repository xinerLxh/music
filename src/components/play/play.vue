<template>
    <div class="container">
        <h1>播放界面</h1>
        <div ref='disc' class="song_disc">
           <img class="disc_bg" src="../../assets/image/cd_wrapper.png">
           <img  @click="player" class="disc_play" src="http://p1.music.126.net/A8qicH14toObbLpPMiKmBw==/109951163110962030.jpg" />
           <span ref="button" @click="player"></span>
           <audio ref="music" src="http://m10.music.126.net/20180201195922/1265c263cd7ff5aeecf337dc5e3c1cce/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3">
           </audio>
        </div>
    </div>
</template>

<script>
export default {
  mounted () {
    console.log(this.$refs.music)
    // this.$refs.music.play()
  },
  methods: {
    player () {
      console.log(this)
      if (this.isPlay) {
        this.$refs.music.pause()
        this.isPlay = false
        clearInterval(this.timer)
        this.timer = null
      } else {
        this.$refs.music.play()
        this.isPlay = true
        this.timer = setInterval(() => {
          this.$refs.disc.style.transform = `rotate(${this.deg}deg)`
          this.deg += 5
        }, 100)
      }
    },
    isDisplay () {
      this.$refs.button.style.display = 'none'
      console.log(11111)
    }
  },
  data () {
    return {
      // 设定一个变量来保存音乐的播放状态
      isPlay: false,
      timer: null,
      deg: 0
    }
  }
}
</script>

<style scoped lang="stylus">
@import "~assets/stylus/variable"
.container
    width:100%
    display:relative
    bottom:0
    top:0
    left:0
    right:0
    height:600px
    background:url('http://p1.music.126.net/pmHS4fcQtcNEGewNb5HRhg==/2002210674180202.jpg') no-repeat
  .song_disc
    width:100%
    position:absolute
    transform-origin:50% 50%
    transition: all 0.3 linear
    transform:rotate(0deg)
    //  margin:5% 15%
    text-align:center
    .disc_bg
     width:70%
    .disc_play
      position:absolute
      border-radius:50%
      right:26%
      top:16%
      width:48%
      z-index:2
      &:hover {z-index:0}
    span
       display:inline-block
       background:url('../../assets/image/play.png') no-repeat
       background-size:contain
       position:absolute
       left:39%
       top:35%
       width:30%
       height:30%
</style>