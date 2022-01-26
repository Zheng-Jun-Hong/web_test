<template>
    <div class="test1">
        <div class="narbar"><Narbar/></div>
        <div class="time"><Time/></div>
        <div class="table"><Table v-bind:tableData="tableData" @dbclick="eventOutput"/>
            <div class="output">
                {{output}}
            </div>
        </div>
        <!-- <div class="output">{{output}}</div> -->
    </div>
</template>

<script>
import Narbar from '@/components/Narbar.vue'
import Time from '@/components/Time.vue'
import Table from '@/components/test1/table.vue'

export default{
    name: 'test1',
    components: {
        Narbar,
        Time,
        Table
    },
    data(){
        return {
            tableData:[
                {
                    PV:'A建物',
                    equip:'變流器',
                    group:'變流器',
                    event:'發電量低於預期',
                    time:'2021-01-01 00:00:00',
                    returntime:'2021-12-31 12:00:00'
                },
                {
                    PV:'B建物',
                    equip:'串列電流表',
                    group:'AI',
                    event:'串列電流異常',
                    time:'2021-01-10 09:00:00',
                    returntime:'2021-01-10 12:00:00'
                }
            ],
            output:""
        }
    },
    methods:{
        eventOutput: function(value){
           this.output = value;
           alert("您已雙擊警報名稱");
        }
    }
    
}
</script>

<style scoped>
.test1{
    display: flex;
}
.narbar{
    text-align: left;
}
.time{
    /* flex: auto;
    text-align: right;
    margin-right: 35px;
    margin-top: 15px; */
    position: absolute;
    top: 10px;
    right: 2rem;
    height: 50px;
}
.table{
    position: absolute;
    top: 65px;
    left: 180px;
    /* left: 20px; */
    width: 1275px;
    text-align: center;
    margin-bottom: 0px;
    /* box-shadow: 1px 1px 1px gray; */
}
.output{
    font-size: 30px;
    border: none;
    text-align: left;
    /* position: relative;
    right: 1000px; */
}
</style>