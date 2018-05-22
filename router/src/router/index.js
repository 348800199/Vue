import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Course from '@/components/course'
import Master from '@/components/master'
import Java from '@/components/pages/java'
import Web from '@/components/pages/web'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'inde',
      component: Index
    },
    {
      path: '/course',
      name: 'course',
      component: Course,
      redirect:'/course/java', // 重定向
      children:[{
        path:'java',
        component:Java
      },
      {
        path:'web',
        component:Web
      }
    ]
    }
    ,
    {
      // 带多个参数
      path: '/master/:userId/:type', 
      name: 'master',
      component: Master
    }
  ]
})
