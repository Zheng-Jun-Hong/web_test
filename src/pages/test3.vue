<template>
    <div class="test3">
        <div class="narbar"><Narbar/></div>
        <div class="output">
            <div id="plot">
                <el-date-picker v-model="date" 
                placeholder="選擇日期" 
                value-format="YYYY-MM-DD"
                @change="getAxis"
                >
                </el-date-picker>
            </div>
        </div>
    </div>
</template>


<script>
import Narbar from '@/components/Narbar.vue'
import Plotly from 'plotly.js'

export default{
    name:"test3",
    components:{
        Narbar
    },
    data(){
        return {
            date:""
        }
    },
    methods:{
        getAxis:function(date){
            this.axios.post('/history_data_list',{
                "history_ID": "60bd7cfc320c6253341a4de6",
                "datacollection": "inverter",
                "datatype": "p_cell_total",
                "date_range": 0,
                "datepicker1": date,
                "datepicker2": date
            })
            .then((res) => {
                // if (res.data.data.y_axis[0][0] === null){
                //     var arrayLength_y_p = res.data.data.y_axis[0].length;
                //     var arrayLength_y_sun = res.data.data.y_axis[1].length;
                //     this.plot(res.data.data.x_axis, Array(arrayLength_y_p), Array(arrayLength_y_sun));
                // }
                // else{
                //     this.plot(res.data.data.x_axis, res.data.data.y_axis[0], res.data.data.y_axis[1]);
                // }
                this.plot(res.data.data.x_axis, res.data.data.y_axis[0], res.data.data.y_axis[1]);
            })
            .catch((error) => { console.log(error.response) })
        },
        plot:function(x, y_p, y_sun){
            var trace1 = {
                name:"功率",
                x: x,
                y: y_p,
                type:"scatter",
                line:{color:"#80BFFF"}
            };
            var trace2 = {
                name:"照度",
                x: x,
                y: y_sun,
                type:"scatter",
                yaxis:"y2",
                line:{color:"crimson"}
            };
            var data = [trace1, trace2];
            var layout = {
                legend:{
                    x: 1.08,
                    y: 1
                },
                title:{
                    text:"Inverter1 直流功率(kW)",
                    font:{
                        size:25
                    }
                },
                font:{
                    size:14
                },
                yaxis:{
                    title:"功率(kW)"
                },
                yaxis2:{
                    title:"照度(W/m²)",
                    overlaying:"y",
                    side:"right",
                    titlefont:{color:'black'},
                    tickfont:{color:'black'}
                }
            };
            // console.log(data);
            Plotly.newPlot("plot", data, layout);
        },
        test:function(date){
            console.log(date);
        }
    },
    mounted(){
        this.getAxis("2022-01-08");
    }
}
</script>

<style scoped>
.test3{
    display:flex;
}
.output{
    position: absolute;
    left: 250px;
    top: 50px;
}
#plot{
    width: 1100px;
    height: 500px;
}
</style>