1.router 嵌套        
    router.js 里面 children 里面
    redirect 重定向
    在html里面<router-view></router-view> 显示
    如果还要继续嵌套 就继续在children 里面继续加children
2.带参数     
    router 必须name 要和组件里的name一直
    在router.js 里面配置 path: '/master/:userId
    传递：<router-link :to="{ name: 'master', params: { userId: 123 } }">专家</router-link>
    接收：$route.params.userId
    多个参数 且为对象
    path: '/master/:userId/:type', 
    传递：<router-link :to="{ name: 'master', params: { userId: 123 ,type : obj} }">专家</router-link>  obj为后台数据
    接收：$route.params.type
3.路由高亮     
    加 exact 作用范围 为子孙组件
    <li><router-link  to="/" exact>首页</router-link></li>
    在全局设置class的样式 在App.vue
     .router-link-active{
         color: red;
     }
