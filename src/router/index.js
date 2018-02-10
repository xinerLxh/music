import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header/header'
import Recommened from '@/components/recommened/recommened'
import HotSearch from '@/components/hotSearch/hotSearch'
import Search from '@/components/search/search'
import RankList from '@/components/rankList/rankList'
import Play from '@/components/play/play'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '',
      component: Header,
      children: [
        {path: '/recommened', component: Recommened},
        {path: '/hotSearch', component: HotSearch},
        {path: '/rankList', component: RankList},
        {path: '/search', component: Search}
      ]
    },
    {path: '/play', component: Play}
  ]
})
