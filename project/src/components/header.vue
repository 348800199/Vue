<template>
  <div class="app-head">
      <div class="app-head-inner">
            <img src="../assets/logo.png" alt="">
            <span>
                任何的版本的 Internet Explorer （包括 IE8）都不支持属性值 "inherit" 或 "hidden"。
            </span>
            <div class="head-nav">
                <ul>
                    <li>注册</li>
                    <li style="padding:0 10px">|</li>
                    <li>登陆</li>
                </ul>
            </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
.app-head{
    background: #363636;
    color: #b2b2b2;
    height: 90px;
    line-height: 90px;
    width: 100%;
}
.app-head-inner {
    width: 1200px;
    margin: 0 auto;
}
.head-logo {
    float: left;
}
.app-head-inner span{
    position: relative;
    top:-20px
}
.app-head-inner img{
    width: 50px;
    margin-top:20px 
}
.head-nav {
    float:right
}
ul li{
float:left
}
</style>
