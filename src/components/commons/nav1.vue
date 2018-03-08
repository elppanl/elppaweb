<template>
    <div>
        <div id="head">
            <div id="hbox" v-if="show">
                <router-link to="/"><img src="../../assets/elplogo1.png" alt="navlogo" class="himg1"></router-link>
                <ul>
                    <router-link to="/" class="hbtn1" :class="{'navactive':isActive1}" id="hbtn1"><li>我的世界</li></router-link>
                    <router-link to="/elpp2" class="hbtn1" :class="{'navactive':isActive2}" id="hbtn2"><li>前端技术</li></router-link>
                    <router-link to="/elpp3" class="hbtn1" :class="{'navactive':isActive3}" id="hbtn3"><li>太极之道</li></router-link>
                    <router-link to="/elpp4" class="hbtn1" :class="{'navactive':isActive4}" id="hbtn4"><li>诗与远方</li></router-link>
                    <router-link to="/elpp5" class="hbtn1" :class="{'navactive':isActive5}" id="hbtn5"><li>有朋自来</li></router-link>
                </ul>
            </div>
            <div id="hboxm" v-if="showm">
                <router-link to="/" id="hmlogo"><img src="../../assets/elplogo1.png" alt="navlogo" class="himg2"></router-link>
                <span id="mtit">{{mtital}}</span>
                <i class="icon iconfont icon-liebiao" @click="mlshow"></i>
            </div> 
        </div>
        <div id="hbmlistbox" v-if="showml">
            <div id="hbmlistside" @click="mloff"></div>
            <transition name="fade">
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
            </transition>
        </div>
            
    </div>
    
</template>

<script>
    export default {
        // 使用props接收父组件传来的信息
        props:['message'],
        data:function(){
            return{
                show:true,
                showm:false,
                showml:false,
                isActive1:'',
                isActive2:'',
                isActive3:'',
                isActive4:'',
                isActive5:'',
                mtital:''
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
            },
            mltop(){

            }
        },
        mounted() {
            this.panduan(),
            window.addEventListener('resize', this.sf)
        },
        watch:{
            // 监测父组件用props传来的值，一旦有变化，就执行下面函数
            message(newVal, oldVal){
                console.log("111111111111"+newVal);
                console.log("222222222222"+oldVal);
                let name=newVal;
                if(name==='HomePage'){
                    this.isActive1=true;
                    this.isActive2=false;
                    this.isActive3=false;
                    this.isActive4=false;
                    this.isActive5=false;
                    this.mtital="我的世界";
                }else if(name==='WebTechnology'){
                    this.isActive1=false;
                    this.isActive2=true;
                    this.isActive3=false;
                    this.isActive4=false;
                    this.isActive5=false;
                    this.mtital="前端技术";
                }else if(name==='taiji'){
                    this.isActive1=false;
                    this.isActive2=false;
                    this.isActive3=true;
                    this.isActive4=false;
                    this.isActive5=false;
                    this.mtital="太极之道";
                }else if(name==='yuanfang'){
                    this.isActive1=false;
                    this.isActive2=false;
                    this.isActive3=false;
                    this.isActive4=true;
                    this.isActive5=false;
                    this.mtital="诗与远方";
                }else if(name==='friends'){
                    this.isActive1=false;
                    this.isActive2=false;
                    this.isActive3=false;
                    this.isActive4=false;
                    this.isActive5=true;
                    this.mtital="有朋自来";
                }
            }
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
            z-index: 900;
            border-bottom: 5px solid #ccffcc;
            border-top: 5px solid #ccffcc;
        }
        .himg1{
            width: 50px;
            height: 50px;
        }
        .himg2{
            width: 50px;
            height: 50px;
            float: left;
            margin-left: 5%;
        }
        #mtit{
            font-size: 20px;
            margin-left: -8%;
        }
        #hbox{
            width: 980px;
            margin: 0 auto;
            height: 50px;
            line-height: 50px;
            padding-left: 35px;
        }
        #hbox>ul{
            /* width: 600px; */
            padding-right: 35px;
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
            text-align: center;
        }
        #hboxm>i{
            font-size: 26px;
            /* display: inline-block; */
            float: right;
            margin-right: 5%;
            color:#663333;
            cursor: pointer;
        }
        #hmlogo{
            margin-left: 5%;
        }
        #hbmlist{
            position: fixed;
            top: 0;
            right: 0;
            z-index: 1000;
            width: 50%;
            height: 100%;
            /* background-color:rgba(0, 102, 51, .9); */
            background-color: #006633;
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
        
        .fade-enter {
            /* 进入前状态是right:-300px */
            right: -300px;
            /* 从进入前到进入完成需要以下过渡 */
            transform:translate(300px,0);
        }
        .fade-leave{
            /* 离开前，也就是进入完成后的状态是right:0 */
            right: 0px;
        }
        .fade-enter-active{
            /* 执行进入时，执行上面设置好的过渡（transform:translate(300px,0);）在1秒完成 */
            transition:all .5s;
        }
        .fade-leave-active{
            /* 执行离开时执行下列过渡，在1秒完成 */
            transform:translate(300px,0);
            transition:all .5s;
        }
        .navactive{
            border-bottom: 5px solid #cc6600;
        }
        #hbmlistbox{
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 950;
            background-color:rgba(204, 204, 153, .7); 
        }
        #hbmlistside{
            width: 50%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 960;
        }
</style>
