<template>
  <div class="page">
      我是爸爸
      <Child :title="msg" @info="infoHand"/>
{{info}} --来自儿子的参数
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

      }
  },
  components: {
      Child

  }
}
</script>

<style scoped>
</style>
