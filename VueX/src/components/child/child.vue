<template>
  <div class="page">
  我是儿子
  <div>
    {{ title }} --来至父亲的参数
  </div>
  <button @click="sendMsg">给父亲传递</button>
    <div> {{getCount}} --vuex儿子</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
        info:'爸爸你好，我是儿子'
    }
  },
  props:{
      title:{
          type:String,
          default:'' //默认值
      }

  },
  methods:{
      sendMsg(){
          this.$emit("info",this.info)
          this.$store.commit('increment')
      }
  },
    computed:{
      getCount(){
          return this.$store.state.count
      }

  },
  components: {

  }
}
</script>

<style scoped>

</style>
