<template>
  <router-link to="/">
    <div class="rankList">
      <img :src="imgurl" />
      <ul v-if="musicList.length > 0">
        <li :key="index" v-for="(song, index) in musicList">
          <span class="number">{{index+1}}</span>
          <span class="title">{{song[0].songs[0].name}}</span>
        </li>
      </ul>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['Data', 'imgurl'],
  created () {
    this.musicList = []
    for (let i = 0; i < this.Data.length; i++) {
      let id = this.Data[i].id
      this.getData('/song/detail?ids=' + id).then(detail => {
        this.musicList.push(detail)
      })
    }
  },
  methods: {
    // 发送请求获取所需的数据url 地址
    getData (url) {
      return new Promise((resolve, reject) => {
        this.$http.get('http://127.0.0.1:3000' + url).then(res => {
          if (res.data.code === 200) {
            let Datatemp = []
            let Data = res.data
            Datatemp.push(Data)
            resolve(Datatemp)
          }
        })
      })
    }
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
.rankList
  display:flex
  justfy-content:space-between
  width:100%
  margin-bottom:1%
  img
   width:37%
   height:30%
  ul
   display:flex
   flex-direction:column
   align-content:stretch
   // flex-wrap:wrap
   justify-content:space-around
   width:70%
  li
    margin-left:2%
  .number
    margin:2%
    height:100%
</style>