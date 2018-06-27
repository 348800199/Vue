<template>
  <div class="container">
      <div class="leftbox">
          <ul>
            <li @click="clickLi(item,$event,index)" :class="[index==indexs?'red':'','li']" :key="item.id" v-for="(item,index) in arr">{{ item.name }}</li>
          </ul>
      </div>
      <div class="rightbox">
        <component :is="currentTabComponent"></component>
      </div>
      {{ getUrl }}
      <img :src="imgUrl" >
  </div>
</template>

<script type="text/ecmascript-6">
import Detail1 from "@/components/detail/detail1";
import Detail2 from "@/components/detail/detail2";
export default {
  name: "detail",
  data() {
    return {
      imgUrl:require('../assets/logo.png'),
      currentTabComponent:'Detail1',
      indexs:0,
      arr: [
        {
          id: 1,
          name: "等级一"
        },
        {
          id: 2,
          name: "等级二"
        }
      ]
    }
  },
  created() {},
  methods: {
    clickLi(item,event,index){
      this.indexs=index;
      this.currentTabComponent=item.id=='1'?'Detail1':'Detail2'
    }
  },
  components: {
    Detail1,
    Detail2
  },
  computed:{
    getUrl(){
      return this.$route.path
    }
  }
};
</script>

<style scoped>
.leftbox{
  border: 1px solid red;
  width: 100px;
  height: 100px;
  float: left;
}
ul{
  height:100%;
}
.li{
  text-align: center;
  height: 50%;
  list-style: none;
  line-height: 50px;
  cursor: pointer;
}
.red{
  color:red;
}
.rightbox{
  float: left;
}
</style>
