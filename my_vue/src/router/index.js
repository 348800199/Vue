import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Style from '@/components/style'
import Father from '@/components/Father'
import Directive from '@/components/directive'
import Filters from '@/components/filters'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Style',
      name: 'Style',
      component:Style
    },
    {
      path: '/father',
      name: 'father',
      component:Father
    },
    {
      path: '/directive',
      name: 'directive',
      component:Directive
    },
    {
      path: '/filters',
      name: 'filters',
      component:Filters
    }
  ]
})
