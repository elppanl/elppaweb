<template>
    <div>
        <div id="head">
            <div id="hbox" v-if="show">
                <router-link to="/"><img src="../../assets/elplogo1.png" alt="navlogo" width="50px" height="50px"></router-link>
                <ul>
                    <router-link to="/" class="hbtn1"><li>我的世界</li></router-link>
                    <router-link to="/elpp2" class="hbtn1"><li>前端技术</li></router-link>
                    <router-link to="/elpp3" class="hbtn1"><li>太极之道</li></router-link>
                    <router-link to="/elpp4" class="hbtn1"><li>诗与远方</li></router-link>
                    <router-link to="/elpp5" class="hbtn1"><li>有朋自来</li></router-link>
                </ul>
            </div>
            <div id="hboxm" v-if="showm">
                <router-link to="/" id="hmlogo"><img src="../../assets/elplogo1.png" alt="navlogo" width="50px" height="50px"></router-link>
                <i class="icon iconfont icon-liebiao" @click="mlshow"></i>
            </div> 
        </div>
        <div id="hbmlist" v-if="showml">
            <div id="htmlbox" @click="mloff">
                <i class="icon iconfont icon-31fanhui2"></i>
            </div> 
            <ul>
                <router-link to="/" class="hbtn2"><li>我的世界</li></router-link>
                <router-link to="/elpp2" class="hbtn2"><li>前端技术</li></router-link>
                <router-link to="/elpp3" class="hbtn2"><li>太极之道</li></router-link>
                <router-link to="/elpp4" class="hbtn2"><li>诗与远方</li></router-link>
                <router-link to="/elpp5" class="hbtn2"><li>有朋自来</li></router-link>
            </ul>
        </div>
    </div>
    
</template>

<script>
    export default {
        data:function(){
            return{
                show:true,
                showm:false,
                showml:false
            }
        },
        methods: {
            panduan(){
                if(window.innerWidth>768){
                    this.show=true;
                    this.showm=false;
                }else{
                    this.show=false;
                    this.showm=true;
                }
            },
            sf(){
                console.log(window.innerWidth);
                if(window.innerWidth>768){
                    this.show=true;
                    this.showm=false;
                }else{
                    this.show=false;
                    this.showm=true;
                }
            },
            mlshow(){
                this.showml=true;
            },
            mloff(){
                this.showml=false;
            }
        },
        mounted() {
            this.panduan(),
            window.addEventListener('resize', this.sf)
        }
    }
    </script>

    <style>
        #head{
            width: 100%;
            height: 50px;
            background-color: #ccffcc;
            position: fixed;
            top: 0;
            border-bottom: 5px solid #ccffcc;
        }
        #hbox{
            width: 980px;
            margin: 0 auto;
            height: 50px;
            line-height: 50px;
            padding-left: 35px;
        }
        #hbox>ul{
            width: 600px;
            display: -webkit-inline-box;
            float: right;
            margin-top: 0;
            margin-bottom: 0;
        }
        .hbtn1{
            list-style: none;
            display: -webkit-inline-box;
            margin-left: 30px;
            text-decoration: none;
            font-size: large;
            color:#663333;
        }
        .hbtn1:hover{
            border-bottom: 5px solid #cc6600;
        }
        #hboxm{
            width: 100%;
            height: 50px;
            line-height: 50px;
        }
        #hboxm>i{
            font-size: 26px;
            display: inline-block;
            float: right;
            margin-right: 5%;
            color:#663333;
            cursor: pointer;
        }
        #hmlogo{
            margin-left: 5%;
        }
        #hbmlist{
            position: absolute;
            top: 0;
            right: 0;
            width: 50%;
            height: 100%;
            background-color:rgba(0, 102, 51, .9);
        }
        #htmlbox{
            width: 100%;
            height: 50px;
            line-height: 50px;
            border-bottom: 5px solid #ccffcc;
            background-color: #006633;
        }
        #htmlbox>i{
            font-size: 26px;
            color:#ccffcc;
            float: right;
            margin-right: 5%;
            cursor: pointer;
        }
        .hbtn2{
            color:#ccffcc;
            font-size: large;
            list-style: none;
            text-decoration: none;
            text-align: center;
            line-height: 50px;
        }
        .hbtn2>li{
            border-bottom: 1px solid #ccffcc;
        }
        #hbmlist>ul{
            padding-left: 0;
        }
</style>
