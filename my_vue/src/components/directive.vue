<!--  -->
<template>
  <div>
      <input v-focus type="text">
      <p v-fontColor>我是自定义指令</p>
  </div>
</template>

<script>
import Vue from "Vue";
export default {
  data() {
    return {};
  },
  created() {
    this.getParams()
  },
  //   局部自定指令
  directives: {
    focus: {
      // 指令的定义
      inserted: function(el) {
        el.focus();
      }
    },
    // 定义字体颜色
    fontColor: {
      inserted: function(el) {
        el.style.color = "red";
      }
    }
  },
  components: {},
  computed: {},
  methods: {
    getNO() {
      this.$axios
        .get("http://www.wwtliu.com/sxtstu/blueberrypai/getIndexBanner.php")
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getParams() {
      // 放入url `http://www.wwtliu.com/sxtstu/news/juhenews.php?a=${a}b=${b}`
      this.$axios.get("http://www.wwtliu.com/sxtstu/news/juhenews.php",{
          params:{
            type:'junshi',
            count:30
          }
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style  scoped>

</style>