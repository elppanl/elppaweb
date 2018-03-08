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
                    <router-link to="/elpp5"><img src="../../assets/b2.jpg" alt="lun2"></router-link>
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
                    <router-link to="/elpp5"><img src="../../assets/b2.jpg" alt="lun2"></router-link>
                </van-swipe-item>
                <van-swipe-item key="6">
                    <router-link to="/elpp5"><img src="../../assets/b3.jpg" alt="lun3"></router-link>
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- vant结束 -->
    </div>
    

</template>

<script>
    export default{
        data:function(){
            return{
                pclun:'',
                mmlun:''
            }
        },
        methods:{
            panduan(){
                if(window.innerWidth>979){
                    this.pclun=true;
                    this.mmlun=false;
                }else{
                    this.pclun=false;
                    this.mmlun=true;
                }
            },
            sf(){
                console.log(window.innerWidth);
                if(window.innerWidth>979){
                    this.pclun=true;
                    this.mmlun=false;
                }else{
                    this.pclun=false;
                    this.mmlun=true;
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

</style>

