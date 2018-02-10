<template>
    <div>
      <m-rank v-if="newMusicRank.length > 0" :Data = "newMusicRank" :imgurl="newImgUrl"></m-rank>
      <m-rank v-if="hotMusicRank.length > 0" :Data = "hotMusicRank" :imgurl="hotImgUrl"></m-rank>
      <m-rank v-if="AcgMusicRank.length > 0" :Data = "AcgMusicRank" :imgurl="acgImgUrl"></m-rank>
      <m-rank v-if="SoringMusicRank.length > 0" :Data = "SoringMusicRank" :imgurl="soringImgUrl"></m-rank>
      <m-rank v-if="ElectronicMusicRank.length > 0" :Data = "ElectronicMusicRank" :imgurl="electronicImgUrl"></m-rank>
      <m-rank v-if="OriginalMusicRank.length > 0" :Data = "OriginalMusicRank" :imgurl="originalImgUrl"></m-rank>
    </div>
</template>

<script>
export default {
  created () {
    // 歌曲新歌榜
    this.getData('/top/list?idx=0', 3).then(res => {
      this.newMusicRank = res
    })
    // 新歌榜封面图
    this.newImgUrl = 'http://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=150y150'
    // 歌曲热歌榜
    this.getData('/top/list?idx=1', 3).then(res => {
      this.hotMusicRank = res
    })
    // 热歌榜封面图
    this.hotImgUrl = 'http://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=150y150'
    // 云音乐ACG音乐榜
    this.getData('/top/list?idx=22', 3).then(res => {
      this.AcgMusicRank = res
    })
    // 云音乐ACG封面图
    this.acgImgUrl = 'http://p1.music.126.net/vttjtRjL75Q4DEnjRsO8-A==/18752170813539664.jpg?param=150y150'
    // 云音乐飙升榜
    this.getData('/top/list?idx=3', 3).then(res => {
      this.SoringMusicRank = res
    })
    // 云音乐飙升封面图
    this.soringImgUrl = 'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150'
    // 云音乐电音榜
    this.getData('/top/list?idx=4', 3).then(res => {
      this.ElectronicMusicRank = res
    })
    // 云音乐电音封面图
    this.electronicImgUrl = 'http://p1.music.126.net/5tgOCD4jiPKBGt7znJl-2g==/18822539557941307.jpg?param=150y150'
    // 原创音乐榜
    this.getData('/top/list?idx=2', 3).then(res => {
      this.OriginalMusicRank = res
    })
    // 原创音乐封面图
    this.originalImgUrl = 'http://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=150y150'
  },
  methods: {
    // 发送请求获取所需的数据url 地址 displayCount 要显示的数据条数
    getData (url, displayCount) {
      return new Promise((resolve, reject) => {
        this.$http.get('http://127.0.0.1:3000' + url).then(res => {
          // if (res.data.code === 200) {
          let Datatemp = []
          for (let i = 0; i < displayCount; i++) {
            let Data = res.data.privileges[i]
            Datatemp.push(Data)
          }
          resolve(Datatemp)
          // }
        })
      })
    }
  },
  data () {
    return {
      newMusicRank: [],
      newImgUrl: '',
      hotMusicRank: [],
      hotImgUrl: '',
      AcgMusicRank: [],
      acgImgUrl: '',
      SoringMusicRank: [],
      soringImgUrl: '',
      ElectronicMusicRank: [],
      electronicImgUrl: '',
      OriginalMusicRank: [],
      originalImgUrl: ''
    }
  }
}
</script>

<style scoped lang="stylus">
</style>