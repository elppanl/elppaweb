<template>
  <div id="app">
    <!-- 给导航组件传入一个props -->
    <nav1 :message="navbiao"></nav1>
    <div id="tf" v-if="show">{{topshu}}</div>
    <router-view/>
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
    console.log(document.documentElement.scrollTop || document.body.scrollTop);
    this.topshu = document.documentElement.scrollTop || document.body.scrollTop;
    if(this.topshu>300){
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
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
</style>
