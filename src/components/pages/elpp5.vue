<template>
    <div id="elpp5">
        <img src="../../assets/jian1.jpg" alt="简历1" :class="{'jiantu1':isActive1, 'jiantu2':isActive2}">
        <img src="../../assets/jian2.jpg" alt="简历2" :class="{'jiantu1':isActive1, 'jiantu2':isActive2}">
        <img src="../../assets/jian3.jpg" alt="简历3" :class="{'jiantu1':isActive1, 'jiantu2':isActive2}">
        <img src="../../assets/jian4.jpg" alt="简历4" :class="{'jiantu1':isActive1, 'jiantu2':isActive2}">
    </div>
</template>

<script>
    export default{
        data:function(){
            return{
                isActive1:'',
                isActive2:''
            }
        },
        methods:{
            panduan(){
                if(window.innerWidth>768){
                    this.isActive1=true;
                    this.isActive2=false;
                }else{
                    this.isActive1=false;
                    this.isActive2=true;
                }
            },
            sf(){
                if(window.innerWidth>768){
                    this.isActive1=true;
                    this.isActive2=false;
                }else{
                    this.isActive1=false;
                    this.isActive2=true;
                }
            }
        },
        mounted() {
            this.panduan(),
            window.addEventListener('resize', this.sf)
        }
    }
</script>

<style scoped>
    #elpp5{
        margin-top: 60px;
        width: 100%;
        background-color: #cccc99;
        /* background-color: #336666; */
    }
    .jiantu1{
        display:block;
        width: 980px;
        margin: 0 auto;
    }
    .jiantu2{
        width: 100%;
    }
</style>