<template>
    <div id="elpp4">
        <div class="toutu" :class="{'toutum':ptoum, 'toutupc':ptoupc}">
            <img src="../../assets/ptu3.jpg" alt="ptu3">
        </div>
        <p class="lmsm">本栏目将以个人文学作品展示，游记等为主要内容</p>
        <come>
            <p>《诗与远方》栏目在建中</p>
        </come>
    </div>
</template>

<script>
    export default{
        data:function(){
            return{
                ptoum:'',
                ptoupc:''
            }
        },
        methods:{
            panduan(){
                if(window.innerWidth>768){
                    this.ptoupc=true;
                    this.ptoum=false;
                }else{
                    this.ptoupc=false;
                    this.ptoum=true;
                }
            },
            sf(){
                if(window.innerWidth>768){
                    this.ptoupc=true;
                    this.ptoum=false;
                }else{
                    this.ptoupc=false;
                    this.ptoum=true;
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
    #elpp4{
        margin-top: 60px;
    }
    .toutupc{
        width: 100%;
    }
    .toutupc>img{
        width:980px;
        display: block;
        margin: 0 auto;  
    }
    .toutum{
        width: 100%;
    }
    .toutum>img{
        width: 100%;
    }
    .lmsm{
        text-align: center;
        font-size: larger;
        color: #006699;
    }
</style>