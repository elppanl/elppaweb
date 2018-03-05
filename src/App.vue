<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <nav1></nav1>
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
