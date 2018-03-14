<template>
    <div id="elpp1">
        <!-- element carousel开始 -->
        <div id="carouselbox" v-if="pclun">
            <div class="block">
                <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
                <el-carousel height="551px">
                <el-carousel-item key="1">
                    <router-link to="/elpp5"><img src="../../assets/b1.jpg" alt="lun1"></router-link>
                </el-carousel-item>
                <el-carousel-item key="2">
                    <router-link to="/elpp2"><img src="../../assets/b2.jpg" alt="lun2"></router-link>
                </el-carousel-item>
                <el-carousel-item key="3">
                    <router-link to="/elpp5"><img src="../../assets/b3.jpg" alt="lun3"></router-link>
                </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <!-- element carousel结束 -->

        <!-- vant开始 -->
        <div id="mlunbox" v-if="mmlun">
            <van-swipe :autoplay="3000">
                <van-swipe-item key="4">
                    <router-link to="/elpp5"><img src="../../assets/b1.jpg" alt="lun1"></router-link>
                </van-swipe-item>
                <van-swipe-item key="5">
                    <router-link to="/elpp2"><img src="../../assets/b2.jpg" alt="lun2"></router-link>
                </van-swipe-item>
                <van-swipe-item key="6">
                    <router-link to="/elpp5"><img src="../../assets/b3.jpg" alt="lun3"></router-link>
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- vant结束 -->

        <!-- 介绍板块开始 -->
        <div id="jieshao" :class="{'jieshaom':p1m, 'jieshaopc':p1pc}">
            <p>栏目介绍</p>
            <router-link to="/elpp2" class="jieshaotubox" :class="{'jieshaotuboxm':p1m, 'jieshaotuboxpc':p1pc}"><img src="../../assets/z1.jpg" alt="jie1"></router-link>
            <router-link to="/elpp5" class="jieshaotubox" :class="{'jieshaotuboxm':p1m, 'jieshaotuboxpc':p1pc}"><img src="../../assets/z2.jpg" alt="jie2"></router-link>
            <router-link to="/elpp4" class="jieshaotubox" :class="{'jieshaotuboxm':p1m, 'jieshaotuboxpc':p1pc}"><img src="../../assets/z3.jpg" alt="jie3"></router-link>
            <router-link to="/elpp3" class="jieshaotubox" :class="{'jieshaotuboxm':p1m, 'jieshaotuboxpc':p1pc}"><img src="../../assets/z4.jpg" alt="jie4"></router-link>
        </div>
        <!-- 介绍板块结束 -->


    </div>
    

</template>

<script>
    export default{
        data:function(){
            return{
                pclun:'',
                mmlun:'',
                p1pc:'',
                p1m:''
            }
        },
        methods:{
            panduan(){
                if(window.innerWidth>768){
                    this.pclun=true;
                    this.mmlun=false;
                    this.p1pc=true;
                    this.p1m=false;
                }else{
                    this.pclun=false;
                    this.mmlun=true;
                    this.p1pc=false;
                    this.p1m=true;
                }
            },
            sf(){
                console.log(window.innerWidth);
                if(window.innerWidth>768){
                    this.pclun=true;
                    this.mmlun=false;
                    this.p1pc=true;
                    this.p1m=false;
                }else{
                    this.pclun=false;
                    this.mmlun=true;
                    this.p1pc=false;
                    this.p1m=true;
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
    #elpp1{
        margin-top: 60px;
    }
    /* element carousel css开始 */
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    #carouselbox{
        width: 980px;
        margin: 0 auto;
    }
    /* element carousel css结束 */
    /* vant开始 */
    #mlunbox{
        width: 100%;
    }
    #mlunbox img{
        width: 100%;
    }
    /* vant结束 */

    /* 介绍开始 */
    .jieshaopc{
        width: 768px;
        margin: 50px auto;
        /* background-color: lawngreen; */
        text-align: center;
        border-top: 2px solid #4ab0d0;
    }
    .jieshaom{
        width: 100%;
        /* background-color: lawngreen; */
        text-align: center;
    }
    #jieshao>p{
        font-size: 22px;
        line-height: 45px;
        color: #663333;
    }
    .jieshaotuboxpc{
        width: 320px;
        height: 180px;
        display:inline-block;
        margin: 10px;
        overflow: hidden;
    }
    .jieshaotuboxpc>img{
        width: 100%;
        transition: all 2s;
        -moz-transition: all 2s;	/* Firefox 4 */
        -webkit-transition: all 2s;	/* Safari 和 Chrome */
        -o-transition: all 2s;	/* Opera */
    }
    .jieshaotuboxpc>img:hover{
        transform:scale(1.2,1.2);
        -ms-transform:scale(1.2,1.2); /* IE 9 */
        -moz-transform:scale(1.2,1.2); /* Firefox */
        -webkit-transform:scale(1.2,1.2); /* Safari and Chrome */
        -o-transform:scale(1.2,1.2); /* Opera */
    }
    .jieshaotuboxm{
        width: 320px;
        height: 180px;
        display: block;
        margin: 15px auto;
    }
    .jieshaotuboxm>img{
        width: 100%;
    }
    /* 介绍结束 */

</style>

