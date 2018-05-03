<template>
    <div>
      <span :class="status?'fc_red':''">红色</span>
      <div :class="{'fc_gr':status,'more':status}">绿色</div>
      <div :class="styleObj">我是computed</div>
      <div @click="Mquestion">监听</div>
     <mycomponents/>
    </div>
</template>

<script>
import mycomponents from './myComponent'
export default {
  name: "Style",
  components:{mycomponents},
  data() {
    return {
      status: true,
      question: ""
    };
  },
  
  methods: {
    Mquestion() {
      this.question = "1";
    }
  },
  computed: {
    styleObj() {
      return this.status ? "fc_red" : "fc_gr";
    }
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question() {
      console.log("question变改变");
    }
  }
};
</script>

<style>
.fc_red {
  color: red;
}
.fc_gr {
  color: green;
}
</style>

