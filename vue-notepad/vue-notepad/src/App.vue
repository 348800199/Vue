<template>
  <div id="app"
       :class="[getTheme]">
    <n-header></n-header>
  </div>
</template>

<script>
import nHeader from './components/header.vue';

export default {
  name: 'App',
  components: {
    nHeader
  },
  computed: {
    getTheme () {             // 获取主题色
      return 'blue'
      //this.$store.getters.getTheme;
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" src="../static/theme.scss"></style>
<style lang="scss">
</style>
