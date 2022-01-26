<template>
    <div class="frame">
        <div class="desktop">
            <table class="shadow p-3 mb-5 bg-body rounded, table">
                <thead>
                    <tr>
                        <th scope="col" v-for="item in colConfigs" v-bind:key="item">
                            {{item.label}}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in tableData" v-bind:key="item">
                        <td>{{item.PV}}</td>
                        <td>{{item.equip}}</td>
                        <td>{{item.group}}</td>
                        <td @dblclick="$emit('dbclick',item.event)">{{item.event}}</td>
                        <td>{{item.time}}</td>
                        <td>{{item.returntime}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mobile">
            <div class="mobile_item" v-for="item in tableData" v-bind:key="item">
                <div>
                    <div><span class="mobile_title">案場 : </span>{{item.PV}}</div><hr/>
                    <div><span class="mobile_title">設備 : </span>{{item.equip}}</div>
                    <div><span class="mobile_title">警報類型 : </span>{{item.group}}</div>
                    <div><span class="mobile_title">警報名稱 : </span>{{item.event}}</div><hr/>
                    <div><span class="mobile_title">警報發生 : </span>{{item.time}}</div>
                    <div><span class="mobile_title">警報修復 : </span>{{item.returntime}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:'Table',
    data(){
        this.colConfigs = [
            {prop:'PV', label:'案場'},
            {prop:'equip', label:'設備'},
            {prop:'group', label:'警報類型'},
            {prop:'event', label:'警報名稱'},
            {prop:'time', label:'警報發生'},
            {prop:'returntime', label:'警報修復'}
        ]
    },
    props:{
            tableData:{
                type: Array,
                required: true
            }
    },
    // methods:{
    //     dblclickHandler(){
    //         alert("test");
    //     }
    // }
}
</script>

<style scoped>
hr{
    margin: 5px;
}
.desktop{
    display: block;
}
.mobile{
    display: none;
    text-align: left;
    width: 400px;
}
@media (max-width: 992px){
    .desktop{
        display: none;
    }
    .mobile{
        display: block;
    }
}

.mobile_item{
    margin-bottom: 10px;
    border: 1px solid black;
    box-shadow: 1px 1px 5px gray;
}
.mobile_item:nth-child(odd){
    background-color: yellow;
}
.mobile_title{
    font-weight: bold;
}

.frame{
    border-radius: 5px;
}
thead{
    background-color:yellow;
}

</style>