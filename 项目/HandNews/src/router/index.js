import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import MainPage from '@/components/MainPage'
import SearchPage from '@/components/SearchPage'
import ResultPage from '@/components/ResultPage'
import NewsPage from '@/components/NewsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/main',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/search',
      name: 'SearchPage',
      component: SearchPage
    },
    {
      path: '/result',
      name: 'ResultPage',
      component: ResultPage
    },
    {
      path: '/news',
      name: 'NewsPage',
      component: NewsPage
    }
  ]
})
