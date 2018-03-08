<template>
  <div id="come1">
    <i class="icon iconfont icon-fixing"></i>
    <slot><p>栏目在建中</p></slot>
    <p>敬请期待</p>
  </div>
  
</template>

<script>
  export default{

    }
</script>

<style>
#come1{
  width: 250px;
  height: 250px;
  border: solid 3px #5c6b77;
  margin: 80px auto;
  text-align: center;
  padding-top: 50px;
  border-radius: 20px;
  background-color: #ffffcc;
}
#come1 i{
  font-size: 75px;
  color: #5c6b77;
}
#come1 p{
  font-size: larger;
}

</style>

