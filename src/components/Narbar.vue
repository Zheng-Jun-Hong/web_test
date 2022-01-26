<template>
    <div>
        <div v-show="!show">
            <button @click="changeShow()" type="button" class="btn btn-danger">開啟導航欄</button>
        </div>
        <div v-show="show" class="narbar">
            <router-link to="/">
                <button type="button" class="btn btn-warning">首頁</button>
            </router-link>
            <router-link to="/">
                <button type="button" class="btn btn-secondary">電站管理</button>
            </router-link>
            <div class="hide">
                <button @click="changeHide()" type="button" class="btn btn-primary">收合導航欄</button>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'Narbar',
    data() {
        return {
            show:true
        }
    },
    methods:{
        changeHide:function(){
            this.show = false;
        },
        changeShow:function(){
            this.show = true;
        }
    },
    mounted(){
        addEventListener('resize', ()=>{
            // var screenWidth  = screen.width;
            var screenWidth = window.innerWidth;
            if(screenWidth < 992){
                this.changeHide();
            }
            else{
                this.changeShow();
            }
        })
    }
}
</script>

<style scoped>
.narbar{
    margin-top: 10px;
    border-radius: 5px;
    height: 730px;
    width: 150px;
    text-align: left;
    background-color: black;
    display: block;
}
a{
    display: block;
    position: relative;
    top: 20px;
    margin: 5px;
    padding-left: 15px;
}
.hide{
    position: relative;
    padding-left: 15px;
    top: 590px;
}
</style>
