<!-- 计数器 -->
<template>
  <div class="container">
    <div class="btn" @click="mins"> - </div>
    <div class="middle">
        <input type="text" v-model="numb" @keyup="Handler">
    </div>
    <div class="btn" @click="maxs"> + </div>
  </div>
</template>

<script>
export default {
  data () {
    name:'Counter'
    return {
        numb:1
    };
  },
  // 后台数据 注意 不能与方法同名 props同在this上面
  props:{
    max:{
      type:Number,
      default:5
    },
    min:{
      type:Number,
      default:1
    }
  },

  components: {},

  computed: {},

  methods: {
      maxs() {
          if(this.numb<this.max){
            this.numb++
          }
      },
      mins() {
          if(this.numb>this.min){
            this.numb--
          }
      },
      Handler(){
          // \D 非数字
        let fix;
        if(typeof this.numb === 'string'){
            fix=Number(this.numb.replace(/\D/g,''));
        }else{
            fix=this.numb; 
        }
        if(fix > this.max || fix<this.min){
            fix=this.min
        }
        this.numb=fix
      }
  }
}

</script>
<style scoped>
.container{
    display: flex;
    justify-content: center;
    align-items: center;
}
.btn{
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
}
.middle{
    width: 70px;
    height: 50rpx;
}
.middle input{
    width: 100%;
    text-align: center;
}
</style>