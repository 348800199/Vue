<!--过滤器 -->
<template>
  <div>
      <p>
          {{ message | capitalize }}
      </p>

  </div>
</template>

<script>
export default {
  data() {
    return {
        message:'abcdergt'
    };
  },
  //局部
//   filters: {
//     capitalize: function(value) {
//       if (!value) return "";
//       value = value.toString();
//       return value.charAt(0).toUpperCase() + value.slice(1);
//     }
//   },
  components: {},

  computed: {},

  methods: {}
};
</script>
<style scoped>

</style>