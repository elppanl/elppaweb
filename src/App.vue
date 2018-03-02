<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div id="head">这里是主导航</div>
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
      topshu:''
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
   }

  },
  mounted() {
   window.addEventListener('scroll', this.gun),
   window.addEventListener('resize', this.sf)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#head{
  width: 100%;
  height: 70px;
  background-color: green;
  line-height: 70px;
  position: fixed;
  top: 0;
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
