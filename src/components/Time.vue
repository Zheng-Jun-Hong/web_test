<template>
    <div class="displayTime">
        <p>{{nowtime}}</p>
    </div>
</template>

<script>
import moment from 'moment'

export default{
    name:'Time',
    data(){
        return{
            nowtime:""
        }
    },
    methods:{
        getTime(){
            setInterval(()=>{
                this.nowtime = new Date();
                this.nowtime = moment(this.nowtime).format('HH:mm:ss')
            },1000)
        }
    },
    created(){
        this.getTime();
    }
}
</script>

<style scoped>
p{
    font-size: 30px;
}
.displayTime{
    display: block;
}
@media(max-width: 992px){
    .displayTime{
        display: none;
    }
}
</style>