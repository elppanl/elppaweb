<template>
    <div id="elpp2p1">
        <!-- <come>
            <p>《前端科技》文章在建中</p>
        </come> -->
        <div id="arthead"></div>
        <div id="artbox" :class="{'p2artm':p2am, 'p2artpc':p2apc}">
            <div id="artleft" v-if="p2aleft">
                <h2>文章目录</h2>

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
                        <span>导航一</span>
                        </template>
                        <!-- <el-menu-item-group> -->
                        <!-- <template slot="title">分组一</template> -->
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                        <!-- </el-menu-item-group> -->
                        <!-- <el-menu-item-group title="分组2"> -->
                        <el-menu-item index="1-3">选项3</el-menu-item>
                        <!-- </el-menu-item-group> -->
                        <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                        <i class="el-icon-document"></i>
                        <span>导航二</span>
                        </template>
                        <!-- <el-menu-item-group> -->
                        <!-- <template slot="title">分组一</template> -->
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <!-- </el-menu-item-group> -->
                        <!-- <el-menu-item-group title="分组2"> -->
                        <el-menu-item index="2-3">选项3</el-menu-item>
                        <!-- </el-menu-item-group> -->
                        <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    </el-menu>
                </el-col>
                </el-row>

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
            inx1(){
                 let tt=$("#d1").offset().top-160
                 $("html, body").animate({
                    scrollTop: tt + "px"
                    }, {
                    duration: 300,
                    easing: "swing"
                    });

            },
            inx2(){
                 let tt=$("#d2").offset().top-160
                 $("html, body").animate({
                    scrollTop: tt + "px"
                    }, {
                    duration: 300,
                    easing: "swing"
                    });

            },
            inx3(){
                 let tt=$("#d3").offset().top-160
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
        background-color: #ccffcc;
    }
    #arthead{
        height: 90px;
        width: 100%;
        position: fixed;
        border: 1px solid #e9e9e9;
        background-color: #ffffff;
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
        position: fixed;
        top: 160px;
        border: 1px solid #e9e9e9;
        border-radius: 4px;
        background-color: #ffffff;
        text-align: center;
    }
    #artleft>h2{
        border-bottom: 1px solid #e9e9e9;
        line-height: 50px;
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
        padding-top: 100px;
        background-color: #ffffff;
    }
    .clear{
        clear: both;
    }
    #cai1{
        width: 100%;
        text-align: left;
    }
</style>

