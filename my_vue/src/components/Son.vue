<template>
  <div class="father">
      <!-- 插槽 -->
       <slot name='s1' text="hello from child"></slot>
      <slot name='s2'></slot>
      我是儿子
     {{ myValue }}
      {{ message }}
      <button  @click="incrementCounter">点击传递给父组件</button>

  </div>
</template>
<script>
  export default{
      name:'son',
      data(){
          return{
              counter:0
          }
      },
      methods:{
        //   子向父
         incrementCounter () {
          this.counter += 1
          this.$emit('increment',this.counter)
    }
      },
    //  父向子传递
    props:{
        'message':String,
        'myValue':Number
    }
  }
</script>
<style scoped>

</style>
