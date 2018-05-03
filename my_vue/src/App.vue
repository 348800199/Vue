
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <router-view/> -->
    <routers/>
  </div>
</template>

<script>
import routers from '@/components/routers'
export default {
  name: 'App',
  components: {
    routers
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
