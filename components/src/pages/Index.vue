<!--  -->
<template>
  <div>
      计数器:
      <Counter :max="Counter.max" :min="Counter.min"/>
  </div>
</template>

<script>
import Counter from "@/components/counter/counter";
export default {
    name:'Index',
  data () {
    return {
      Counter:{
        max:10,
        min:1
      }
    };
  },
  

  components: {
      Counter
  },

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style scoped>
</style>