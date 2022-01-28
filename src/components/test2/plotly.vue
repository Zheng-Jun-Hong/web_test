<template>
    <div id="tester">
        <el-select v-model="val" size="small" 
            placeholder="請選擇" @change="currentSel"
            popper-class="elSelect"
        >
            <el-option
                v-for="option in graphOption"
                :key="option.value"
                :label="option.label"
                :value="option.value"
            >
            </el-option>
        </el-select>
    </div>
</template>


<script>
import Plotly from 'plotly.js'

export default{
    name:"Plot",
    data(){
        return {
            val:0,
            newGraphData:[],
            newGraphType:[]
        }
    },
    props:{
        graphOption:{
            type:Array,
            required:true
        },
        graphData:{
            type:Array,
            required:true
        },
        graphType:{
            type:Array,
            required:true
        },
        heatMapData:{
            type:Array,
            required:true
        }
    },
    methods:{
        plot(data){
            Plotly.newPlot("tester", data);
        },
        currentSel(val){
            var data=[];
            for(var i=0; i<this.graphData.length; i++){
                data.push({
                    x:this.graphData[i]["x"],
                    y:this.graphData[i]["y"],
                    z:this.heatMapData,
                    type:this.graphType[val]
                })
            }
            this.plot(data);
        }
    },
    mounted(){
        this.currentSel(0);
    }
    // computed:{
    //     dataAndType(){
    //         const {graphData, graphType} = this;
    //         return {
    //             graphData,
    //             graphType
    //         }
    //     }
    // },
    // watch:{
    //     dataAndType : function(newData){
    //         this.newGraphData = newData.graphData;
    //         this.newGraphType = newData.graphType;
    //         this.currentSel(0);
    //     }
    // }
}
</script>

<style>
#tester{
    width: 1000px;
    height: 500px;
}
</style>