<template>
  <div class="page">
      我是爸爸
      <Child :title="msg" @info="infoHand"/>
{{info}} --来自儿子的参数
    <div>{{ getCount }} --vuex 父亲</div>

    <div>getters:{{addCount}}</div>

    <button @click="mix">减一</button>
  </div>
</template>

<script type="text/ecmascript-6">
import Child from "./child"
export default {
  data() {
    return {
        msg:'我是你爸爸，真伟大',
        info:''
    }
  },
  methods:{
      infoHand(data){
          this.info=data
      },
      mix(){
        this.$store.dispatch('mixTwo')
      }
  },
  computed:{
      getCount(){
          return this.$store.state.count
      },
      addCount(){
        return this.$store.getters.addOne
      }

  },
  components: {
      Child
  }
}
</script>

<style scoped>
</style>
