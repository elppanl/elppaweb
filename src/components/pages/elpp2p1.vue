<template>
    <div id="elpp2p1">
        <!-- <come>
            <p>《前端科技》文章在建中</p>
        </come> -->
        <div id="arthead"></div>
        <div id="artbox" :class="{'p2artm':p2am, 'p2artpc':p2apc}">
            <div id="artleft" v-if="p2aleft">
                <h1 @click="inx1">aaa</h1>
                <h1 @click="inx2">bbb</h1>
                <h1 @click="inx3">ccc</h1>
            </div>
            <div id="artright" :class="{'p2arightm':p2am, 'p2arightpc':p2apc}">
                <div id="d1">
                    <p>d1的开头</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                </div>
                <div id="d2">
                    <p>d2的开头</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                </div>
                <div id="d3">
                    <p>d3的开头</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                    <p>111111111111</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data:function(){
            return {
                p2am:'',
                p2apc:'',
                p2aleft:''
            }
        },
        methods:{
            panduan(){
                if(window.innerWidth>768){
                    this.p2apc=true;
                    this.p2am=false;
                    this.p2aleft=true;
                }else{
                    this.p2apc=false;
                    this.p2am=true;
                    this.p2aleft=false;
                }
            },
            sf(){
                console.log(window.innerWidth);
                if(window.innerWidth>768){
                    this.p2apc=true;
                    this.p2am=false;
                    this.p2aleft=true;
                }else{
                    this.p2apc=false;
                    this.p2am=true;
                    this.p2aleft=false;
                }
            },
            inx1(){
                 let tt=$("#d1").offset().top-150
                 $("html, body").animate({
                    scrollTop: tt + "px"
                    }, {
                    duration: 300,
                    easing: "swing"
                    });

            },
            inx2(){
                 let tt=$("#d2").offset().top-150
                 $("html, body").animate({
                    scrollTop: tt + "px"
                    }, {
                    duration: 300,
                    easing: "swing"
                    });

            },
            inx3(){
                 let tt=$("#d3").offset().top-150
                 $("html, body").animate({
                    scrollTop: tt + "px"
                    }, {
                    duration: 300,
                    easing: "swing"
                    });

            }
        },
        mounted() {
            this.panduan(),
            window.addEventListener('resize', this.sf)
        }
    }
</script>

<style>
    #elpp2p1{
        margin-top: 60px;
    }
    #arthead{
        height: 90px;
        width: 100%;
        background-color: lawngreen;
        position: fixed;
    }
    .p2artpc{
        width: 980px;
        margin: 0 auto;
        background-color: lightblue;
    }
    .p2artm{
        width: 100%;
        background-color: lightblue;
    }
    #artleft{
        width: 200px;
        float: left;
        background-color: lavender;
        position: fixed;
        top: 150px;
    }
    .p2arightpc{
        width:770px;
        background-color: lightcoral;
        float: right;
        margin-top: 90px;
    }
    .p2arightm{
        width: 100%;
        background-color: lightcoral;
        padding-top: 90px;
    }
</style>

