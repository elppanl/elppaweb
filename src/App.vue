<template>
  <div id="app">
    <!-- 给导航组件传入一个props -->
    <nav1 :message="navbiao"></nav1>
    <router-view/>
    <!-- <div id="tf" v-if="show">{{topshu}}</div> -->
    <el-popover
      ref="popover1"
      placement="left"
      title=""
      width="10"
      trigger="hover"
      content="返回顶部">
    </el-popover>
    <el-button v-popover:popover1 id="tf1" v-show="show" @click="wscltop"><i class="icon iconfont icon-31huidaodingbu"></i></el-button>
    <footer1></footer1>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function(){
    return{
      show:false,
      topshu:'',
      navbiao:''
    }
  },
  methods: {
   gun() {
    this.topshu = document.documentElement.scrollTop || document.body.scrollTop;
    let winwidth = window.innerWidth;
    if(this.topshu>300 && winwidth>768){
      this.show=true;
    }else if(this.topshu<300){
      this.show=false;
    }
   },
   sf(){
     console.log(window.innerWidth);
   },
  //  更新页面时将当前路由的name赋值给this.navbiao，这个navbiao是要传入头部导航组件的数据
   navupd(){
     this.navbiao=this.$route.name;
   },
   wscltop(){
     this.show=false;
    // js方法
    //  window.scrollTo(0,0);
    // juqery方法
    $("html, body").animate({
    scrollTop: "0"
    }, {
    duration: 300,
    easing: "swing"
    });
   }
  },
  mounted() {
    this.navupd(),
   window.addEventListener('scroll', this.gun),
   window.addEventListener('resize', this.sf)
  },
  updated(){
    this.navupd()
  }
}
</script>

<style>
html, body, #app{
  height: 100%;
  padding: 0;
  margin: 0;
  /* box-sizing:border-box;
  -moz-box-sizing:border-box;
  -webkit-box-sizing:border-box; */
}
img{border:0px};
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
#tf{
  width: 25px;
  height: 50px;
  background-color: lawngreen;
  position: fixed;
  bottom: 10%;
  right: 10%;
}
#tf1{
  position: fixed;
  bottom: 10%;
  right: 10%;
  width: 40px;
  height: 40px;
  line-height: 40px;
  padding: 0;
  font-size: large;
  font-weight: bold;
  opacity: .7;
}
.el-popover{
  min-width: 60px !important;
}
</style>
