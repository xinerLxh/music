
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

import 'assets/stylus/index.styl'

import Log from '@/components/header/log'
import Banner from '@/common/banner'
import musicList from '@/common/musicList'
import mvList from '@/common/mvList'
import ulList from '@/common/ulList'
import rank from '@/common/rank'
Vue.component('m-banner', Banner)
Vue.component('my-log', Log)
Vue.component('m-musicList', musicList)
Vue.component('m-mvList', mvList)
Vue.component('m-ulList', ulList)
Vue.component('m-rank', rank)
Vue.config.productionTip = false
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
