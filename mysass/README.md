安装sass步骤
http://www.ruanyifeng.com/blog/2012/06/sass.html // sass用法
  (1) <style lang="scss"></style>
 cnpm install node-sass sass-loader --save-dev  //安装包
 webpack.base.config.js 里面的 rules里面加入
   		   {
   		     test: /\.scss$/,
       		     loaders: ["style", "css", "sass"]
     		   }
3. <style rel="stylesheet/scss" lang="scss"></style>

 （2）<style lang="sass"></style>
cnpm install sass-loader node-sass --save-dev
 // 解决方案一  记得属相/class名/值前面一定且只能是两个空格，值只能是四个空格
	<style lang="sass">
 	  $highlight-color: #F90
  	  $highlight-border: 1px solid $highlight-color
   	  .selected 
  	    border: $highlight-border
	</style>
