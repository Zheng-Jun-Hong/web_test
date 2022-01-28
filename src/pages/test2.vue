<template>
    <div class="test2">
        <div class="narbar"><Narbar/></div>
        <div class="plotly">
            <Plot :graphOption="graphOption"
                :graphData="graphData"
                :graphType="graphType"
                :heatMapData="heatMapData" 
            />
        </div>
    </div>
</template>

<script>
import Narbar from '@/components/Narbar.vue'
import Plot from '@/components/test2/plotly.vue'

export default{
    name:'test2',
    components:{
        Narbar,
        Plot
    },
    data(){
        return {
            graphOption:[
                {
                    label:"折線圖",
                    value:0
                },
                {
                    label:"柱狀圖",
                    value:1
                },
                {
                    label:"熱流圖",
                    value:2
                }
            ],
            graphData:[{
                "x": [1, 2, 3, 4],
                "y": [10, 15, 13, 17]
            },
            {
                "x": [1, 2, 3, 4],
                "y": [16, 5, 11, 9]
            }],
            heatMapData:[
                [0.00, 0.30, 0.75, 0.50],
                [0.00, 0.30, 0.75, 0.50],
                [0.30, 0.90, 0.75, 0.75],
                [0.30, 0.90, 0.40, 0.10],
                [0.30, 0.90, 0.40, 0.10]
            ],
            graphType:["scatter", "bar", "heatmap"]
        }
    }
}
</script>

<style scoped>
.test2{
    display: flex;
}
.plotly{
    position: absolute;
    left: 250px;
}
</style>