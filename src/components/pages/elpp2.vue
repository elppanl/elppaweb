<template>
    <div id="elpp2">
        <!-- <come>
            <p>《前端技术》栏目在建中</p>
        </come> -->
        <div id="p2p1b1" :class="{'p2bm':p2m, 'p2bpc':p2pc}">
            <img src="../../assets/ptu1.jpg" alt="ptu1">
        </div>
        <div id="p2p1b2" :class="{'p2bm':p2m, 'p2bpc':p2pc}">
            <router-link to="/elpp2p1" class="p2block" :class="{'p2blockm':p2m, 'p2blockpc':p2pc}"></router-link>
            <router-link to="/elpp2p1" class="p2block" :class="{'p2blockm':p2m, 'p2blockpc':p2pc}"></router-link>
            <router-link to="/elpp2p1" class="p2block" :class="{'p2blockm':p2m, 'p2blockpc':p2pc}"></router-link>
            <router-link to="/elpp2p1" class="p2block" :class="{'p2blockm':p2m, 'p2blockpc':p2pc}"></router-link>
            <router-link to="/elpp2p1" class="p2block" :class="{'p2blockm':p2m, 'p2blockpc':p2pc}"></router-link>
            <router-link to="/elpp2p1" class="p2block" :class="{'p2blockm':p2m, 'p2blockpc':p2pc}"></router-link>
        </div>
    </div>
</template>

<script>
    export default{
        data:function(){
            return{
                p2m:'',
                p2pc:''
            }
        },
        methods:{
            panduan(){
                if(window.innerWidth>768){
                    this.p2pc=true;
                    this.p2m=false;
                }else{
                    this.p2pc=false;
                    this.p2m=true;
                }
            },
            sf(){
                console.log(window.innerWidth);
                if(window.innerWidth>768){
                    this.p2pc=true;
                    this.p2m=false;
                }else{
                    this.p2pc=false;
                    this.p2m=true;
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
    #elpp2{
        margin-top: 60px;
    }
    #p2p1b2{
        padding-bottom: 50px;
    }
    .p2bpc{
        width: 980px;
        margin: 0 auto;
    }
    .p2bm{
        width: 100%;
    }
    .p2blockpc{
        width: 485px;
        height: 180px;
        border: 1px solid #e9e9e9;
        border-radius: 5px;
        display:inline-block;
        margin-top: 10px;
    }
    .p2blockpc:hover{
        background-color: #e9e9e9;
    }
    .p2blockm{
        width: 90%;
        margin-top: 10px;
        margin-left: 5%;
        margin-right: 5%;
        height: 180px;
        border: 1px solid #e9e9e9;
        border-radius: 5px;
        display:inline-block;
    }
    #p2p1b1>img{
        width: 100%;
    }
</style>

