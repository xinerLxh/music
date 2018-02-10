<template>
    <div id="recommend">
        <m-banner></m-banner>
        <m-musicList title = "推荐音乐"
        v-if="recommenedMusic.length > 0" :musicData = "recommenedMusic">
        </m-musicList>
        <m-mvList title = "推荐MV"
        v-if="recommenedMv.length > 0" :mvData="recommenedMv">
        </m-mvList>
        <m-ulList v-if="latestMusic.length > 0" title = "最新音乐" :musicData = "latestMusic"></m-ulList>
    </div>
</template>

<script>
export default {
  created () {
    // 请求推荐音乐数据并保存在 recommenedMusic 变量中
    this.getData('/personalized', 6).then(res => {
      this.recommenedMusic = res
    })
    // 向服务器发送请求推荐Mv数据并保存在 recommenedMv 变量中
    this.getData('/personalized/mv', 4).then(res => {
      this.recommenedMv = res
    })

    // 向服务器发送请求推荐最新音乐数据并保存在 latestMusic 变量中
    this.getData('/personalized/newsong', 10).then(res => {
      this.latestMusic = res
    })
  },
  methods: {
    // 发送请求获取所需的数据url 地址 displayCount 要显示的数据条数
    getData (url, displayCount) {
      return new Promise((resolve, reject) => {
        this.$http.get('http://127.0.0.1:3000' + url).then(res => {
          if (res.data.code === 200) {
            let Datatemp = []
            for (let i = 0; i < displayCount; i++) {
              let Data = res.data.result[i]
              Datatemp.push(Data)
            }
            resolve(Datatemp)
          }
        })
      })
    }
  },
  data () {
    return {
      recommenedMusic: [],
      recommenedMv: [],
      latestMusic: []
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
