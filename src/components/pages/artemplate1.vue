<template>
    <div id="xtemplate1">
        <!-- <come>
            <p>《前端科技》文章在建中</p>
        </come> -->
        <div id="arthead" :class="{'p2artheadm':p2am, 'p2artheadpc':p2apc}">
            <p>这里是文章的标题的标题的标题</p>
            <span>2088年12月12日</span>
        </div>
        <div id="artbox" :class="{'p2artm':p2am, 'p2artpc':p2apc}">
            <div id="artleft" v-if="p2aleft">
                <h3>文章目录</h3>
                <el-row class="tac">
                <el-col :span="12" id="cai1">
                    <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title">
                        <i class="el-icon-document"></i>
                        <span>第一章</span>
                        </template>
                        <el-menu-item index="1-1" @click="inx1">第一章第一节</el-menu-item>
                        <el-submenu index="1-2">
                        <template slot="title">第一章第二节</template>
                        <el-menu-item index="1-2-1" @click="inx2">第一章第二节第一部分</el-menu-item>
                        <el-menu-item index="1-2-2" @click="inx3">第一章第二节第二部分</el-menu-item>
                        </el-submenu>
                    </el-submenu>

                    <el-submenu index="2">
                        <template slot="title">
                        <i class="el-icon-document"></i>
                        <span>第二章</span>
                        </template>
                        <el-menu-item index="2-1" @click="inx4">第二章第一节</el-menu-item>
                        <el-submenu index="2-2">
                        <template slot="title">第二章第二节</template>
                        <el-menu-item index="2-2-1" @click="inx5">第二章第二节第一部分</el-menu-item>
                        <el-menu-item index="2-2-2" @click="inx6">第二章第二节第二部分</el-menu-item>
                        </el-submenu>
                    </el-submenu>

                    </el-menu>
                </el-col>
                </el-row>
            </div>
            <div id="artright" :class="{'p2arightm':p2am, 'p2arightpc':p2apc}">
                <div>
                    <h2>第一章</h2>
                    <h3 id="z1j1">第一章第一节</h3>
                    <p>测试的内容，很多很多。I am a Chinese. 测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.</p>
                    <p>测试的内容，很多很多。I am a Chinese. 测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.</p>
                    <h3>第一章第二节</h3>
                    <h4 id="z1j2b1">第一章第二节第一部分</h4>
                    <p>测试的内容，很多很多。I am a Chinese. 测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.</p>
                    <p>测试的内容，很多很多。I am a Chinese. 测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.</p>
                    <h4 id="z1j2b2">第一章第二节第二部分</h4>
                    <p>测试的内容，很多很多。I am a Chinese. 测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.</p>
                    <p>测试的内容，很多很多。I am a Chinese. 测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.</p>
                </div>
                <div>
                    <h2>第二章</h2>
                    <h3 id="z2j1">第二章第一节</h3>
                    <p>测试的内容，很多很多。I am a Chinese. 测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.</p>
                    <p>测试的内容，很多很多。I am a Chinese. 测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.</p>
                    <h3>第二章第二节</h3>
                    <h4 id="z2j2b1">第二章第二节第一部分</h4>
                    <p>测试的内容，很多很多。I am a Chinese. 测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.</p>
                    <p>测试的内容，很多很多。I am a Chinese. 测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.</p>
                    <h4 id="z2j2b2">第二章第二节第二部分</h4>
                    <p>测试的内容，很多很多。I am a Chinese. 测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.</p>
                    <p>测试的内容，很多很多。I am a Chinese. 测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.测试的内容，很多很多。I am a Chinese.</p>
                </div>
            </div>
            <div class="clear"></div>
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
            // 章节目录开始
            inx1(){
                 let tt=$("#z1j1").offset().top-160
                 $("html, body").animate({
                    scrollTop: tt + "px"
                    }, {
                    duration: 300,
                    easing: "swing"
                    });

            },
            inx2(){
                 let tt=$("#z1j2b1").offset().top-160
                 $("html, body").animate({
                    scrollTop: tt + "px"
                    }, {
                    duration: 300,
                    easing: "swing"
                    });

            },
            inx3(){
                 let tt=$("#z1j2b2").offset().top-160
                 $("html, body").animate({
                    scrollTop: tt + "px"
                    }, {
                    duration: 300,
                    easing: "swing"
                    });

            },
            inx4(){
                 let tt=$("#z2j1").offset().top-160
                 $("html, body").animate({
                    scrollTop: tt + "px"
                    }, {
                    duration: 300,
                    easing: "swing"
                    });

            },
            inx5(){
                 let tt=$("#z2j2b1").offset().top-160
                 $("html, body").animate({
                    scrollTop: tt + "px"
                    }, {
                    duration: 300,
                    easing: "swing"
                    });

            },
            inx6(){
                 let tt=$("#z2j2b2").offset().top-160
                 $("html, body").animate({
                    scrollTop: tt + "px"
                    }, {
                    duration: 300,
                    easing: "swing"
                    });

            },
            // 章节目录结束

            // 左侧目录导航方法开始
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
            // 左侧目录导航方法结束
        },
        mounted() {
            this.panduan(),
            window.addEventListener('resize', this.sf)
        }
    }
</script>

<style>
    #xtemplate1{
        margin-top: 60px;
        /* background-color: #ccffcc; */
        background-color: #f6f6f6;
        /* background-color: #cccccc; */
        /* background-color: #ccffff; */
    }
    #arthead{
        width: 100%;
        position: fixed;
        z-index: 800;
        border: 1px solid #e9e9e9;
        background-color: #ffffff;
        text-align: center;
    }
    .p2artheadpc{
        height: 90px;
    }
    .p2artheadm{
        padding-bottom: 10px;
    }
    #arthead p{
        margin-top: 15px;
        margin-bottom: 10px;
        color: #663333;
        font-size: 24px;
    }
    #arthead span{
        color: #663333;
    }
    .p2artpc{
        width: 980px;
        margin: 0 auto;
    }
    .p2artm{
        width: 100%;
    }
    #artleft{
        width: 200px;
        float: left;
        /* position: fixed;
        top: 160px; */
        margin-top: 100px;
        border: 1px solid #e9e9e9;
        border-radius: 4px;
        background-color: #ffffff;
        text-align: center;
    }
    #artleft>h3{
        border-bottom: 1px solid #e9e9e9;
        line-height: 50px;
        color: #663333;
    }
    .p2arightpc{
        width:770px;
        float: right;
        margin-top: 100px;
        border: 1px solid #e9e9e9;
        border-radius: 4px;
        background-color: #ffffff;
    }
    .p2arightm{
        width: 100%;
        border: 1px solid #e9e9e9;
        padding-top: 120px;
        background-color: #ffffff;
    }
    .clear{
        clear: both;
    }
    #cai1{
        width: 100%;
        text-align: left;
    }
    #cai1 span, #cai1 li{
        color: #663333;
    }
    #artright{
        padding-left: 5%;
        padding-right: 5%;
        box-sizing:border-box;
        -moz-box-sizing:border-box; /* Firefox */
        -webkit-box-sizing:border-box; /* Safari */
        color: #555;
    }
    #artright p{
        font-size: 15px;
        line-height: 25px;
        word-wrap:break-word;
    }
</style>

