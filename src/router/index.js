import Vue from 'vue'
import Router from 'vue-router'
import myfooter from '@/components/myfooter'
import us from '@/components/us'
import top250 from '@/components/top250'
import search from '@/components/search'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: myfooter
    },
    /*{
      path: '/',
      name: 'top250',
      component: top250
    },*/
    {
      path: '/search/',
      name: 'search',
      component: search
    },
    {
      path: '/us/',
      name: 'us',
      component: us
    }
  ]
})
