<template>
  <div class="hello">
    {{msg}}
    <p v-html="msg"></p>
    <!-- 不能解析标签 -->
    <p v-text="msg"></p> 
    <p :class="1==1?'fc_red':''">动态style</p>
    <p :title="msg">动态style</p>
    <!-- 条件指令 -->
     <p v-if="status">{{msg}}</p>
     <p v-else>{{msg+'aaaaaaaaaaa'}}</p>
     <!-- 循环 -->
     <div class="listArr">
       <ul>
         <li class="listItem" v-for="(item,index) in getList" :key="index">{{item}}-{{index}}</li>
       </ul>
     </div>
     <!--事件 -->
     <button @click="num++">按钮</button>
     <p>{{num}}</p>
     <li class="listItem"  @click="headClick(item,$event)" v-for="(item,index) in getList" :key="index">{{item}}-{{index}}</li>
     <!-- 按键修饰 -->
     <input v-on:keyup.enter="submit">
     <button @click="fiLters">双数</button>
     <span v-for="item in nums">{{item}}</span>
     <div> {{ Msg }} </div>
    
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      num:0,
      msg: "Welcome to Your Vue.js App",
      status:false,
      getList:['张三','李四','王麻子 '],
      nums:[1,2,3,4,5,6,7,8]
    };
  },
  methods:{
    headClick(item,event){
     console.log(item)
          console.log(event)
    },
    submit(){
      console.log('输入了enter')
    },
    fiLters(){
     this.nums=this.nums.filter(item=>{
        return item%2==0
      })

    }
  },
  // 计算属性
  computed: {
    Msg(){
      return '我是计算属性'
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fc_red{
  color: red;
}
.listItem:nth-child(1){
  list-style: none;
}
</style>
