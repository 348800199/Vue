<!--  -->
<template>
  <div class="main">
      <div>
          <router-link to="/">hellow man</router-link>
         </div>
       <div>
            <router-link to="/Style">hellow father</router-link>
       </div>

  </div>
   
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},


  methods: {}
}

</script>
<style scoped>
.main{
   display:flex;
   justify-content: center;
}
.main > div{
    border: 1px solid red;
    cursor: pointer;
}
.main :first-child{
    margin-right: 20px
}
</style>