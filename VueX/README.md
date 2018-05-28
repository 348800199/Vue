
1.子组件交互
注意： 在同级路径
    在parent.vue 里面引用 不用绝对路径而应用
    import Child from "./child"

2.传值
    (1) 父=>子
          <Child :title="msg">
            data() {
                return {
                    msg:'我是你爸爸，真伟大' // 传递参数
                }
            }
        子接受：
        props:{
            title:{
                 type:String, //定义传递参数类型
                 default:'' //默认值
                }
            }
        直接在div {{ title }}

    (2) 子=>父
            子：绑定函数里面
            this.$emit("info",this.info) // info是函数名称  this.info 是传递参数

            父：
            <Child  @info="infoHand"/>

             infoHand(data){
                 this.info=data  // data 子传递参数
            }
3.vuex
    安装 cnpm install vuex --save
    在全局main.js中注册
    import Vuex from 'vuex'
    Vue.use(Vuex)
    const store = new Vuex.Store({
    // 值
    state: {
        count: 10
    },
    // 方法改变
    mutations: {
        increment(state) {
        state.count++
        }
    }
    })
    *** 重点 在下面vue实例注册
    new Vue({
        store
    })
    使用：得到值
     this.$store.state.count
    改变：推荐使用公用方法
    this.$store.commit('increment') //全局store里面的方法名

 
    

