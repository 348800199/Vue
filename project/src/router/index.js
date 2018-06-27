import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout'
import Detail from '@/pages/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})
