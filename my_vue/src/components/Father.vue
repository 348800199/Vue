<template>
  <div class="father">
      我是父亲
      <input type="text" v-model="myValue">
      <!-- keep-alive 包裹使用缓存 -->
      <Son v-bind:is="currentView"  :message="message" :myValue="myValue" @increment="incrementTotal">
          <!-- 具名插槽 -->
          <div slot="s1" slot-scope="props">
              <p>我是插槽内容1</p>
              <p>{{props.text}}</p>
            </div>
          <div slot="s2"><p>我是插槽内容2</p></div>
      </Son>

  </div>
</template>
<script>
import Son from './Son'
import style from './style'
  export default{
      name:'father',
      components:{Son},
      data(){
          return{
                message:'hello',
                myValue:1,
                currentView:'Son'
          }
      },
      methods:{
          incrementTotal(counter){
              console.log(counter)
          }
      }
  }
</script>
<style scoped>

</style>

