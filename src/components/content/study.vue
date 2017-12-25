<template>
<div id="study">
  <!--img src="../../Image/学习.png" height="300" width="300"/-->
  <search ref="search" v-on:pass_rosta="getRoomStates"></search>
  <div class="demo">
    <br>
    <div id="seat-map" >
      <div v-for="(value,key) in room_states" id="rooms" >
        <div class="seatCharts-cell" >{{key}}</div>
        <div v-for="(valuex,index) in value" id="seats">
          <div v-if = "valuex == 0" @click="selectTime(key,index)" id="s_0" class="seat"></div>
          <div v-else-if ="valuex == 2" @click="cancelTime(key,index)" id="s_2" class="seat"></div>
          <div v-else-if ="valuex == 3" id="s_3" class="seat"></div>
          <div v-else="values == 1" id="s_1" class="seat"></div>
        </div>
        <br>
        <line id="line_02"></line>
      </div>
    </div>
  </div>
  <button id="submit_button" @click="submitOrder" >确认提交</button>
  <div id="legend" class="seatCharts-legend2">
    <ul class="seatCharts-legendList">
      <li class="seatCharts-legendItem">
        <span class="seatCharts-legendDescription">30min/格</span>
      </li>
    </ul>
  </div>

  <div id="legend" class="seatCharts-legend">
    <ul class="seatCharts-legendList">
      <div class="seatCharts-legendItem">
        <div class="seatCharts-seat seatCharts-cell available"></div>
        <span class="seatCharts-legendDescription">可预约</span>
      </div>
      <div class="seatCharts-legendItem">
        <div class="seatCharts-seat seatCharts-cell unavailable"></div>
        <span class="seatCharts-legendDescription">已预约</span>
      </div>
      <div class="seatCharts-legendItem">
        <div class="seatCharts-seat seatCharts-cell auditting"></div>
        <span class="seatCharts-legendDescription">审核中</span>
      </div>
      <div class="seatCharts-legendItem">
        <div class="seatCharts-seat seatCharts-cell selected"></div>
        <span class="seatCharts-legendDescription">已选中</span>
      </div>
    </ul>
  </div>

</div>
</template>

<script>
    var MAX_AMOUNT_TIME = 8
    import Search from "./search.vue"
    export default {
      name: "study",
      data(){
        return{
          room_states:{},
          select_room:"",
          select_amount:0
        }
      },
      methods: {
        getRoomStates:function(room_status){
          //console.log("have get the data",room_status);
          for (var i in room_status) {
            room_status[i].splice(44, 4);
            room_status[i].splice(0, 17);
          }
          this.room_states = room_status;
        },
        init(){
          this.$refs.search.initStudy()
        },
        selectTime(key,index){
          if(this.select_room == "" || this.select_amount == 0)
            this.select_room = key;
          if (this.select_room != key )
          {
            alert("you can only order exact one room once!")
            return;
          }
          if (this.select_amount >= MAX_AMOUNT_TIME)
          {
            var hours = MAX_AMOUNT_TIME/2;
            alert("you can only order "+hours.toString()+" hours once")
            return
          }
          this.select_amount ++
          this.$set(this.room_states[key],index,2);
          this.$set(this.room_states,key,this.room_states[key]);
        },
        cancelTime(key,index){
          this.select_amount --
          this.$set(this.room_states[key],index,0);
          this.$set(this.room_states,key,this.room_states[key]);
          //console.log("cancel",this.room_states[key][index])
        },
        submitOrder(){
          if (!this.ifValid())
          {
            alert("you must order the continuous time")
            return
          }
          var array = this.room_states[this.select_room]
          var len = array.length
          for (var i = 0; i< len;i++)
            if (array[i] == 2)
              this.$set(this.room_states[this.select_room],i,3)
          this.$set(this.room_states,this.select_room,array);
          this.select_amount = 0
          this.select_room = ""
        },
        ifValid(){
          var rooms = this.room_states[this.select_room]
          var meet_o = false
          var meet_2 = false
          var cont = true
          for (var i in rooms){
            if (i == 2)
              meet_2 = true
            if (meet_2 && i != 2)
              meet_o = true
            if (meet_o && i == 2)
              cont = false
          }
          return cont
        }
      },
      components : {
          Search
      }
    }
</script>

<style type="text/css">
    #study{
          text-align: center;
    }
  #rooms{
    margin-left:250px;
    width : 800px;
    height: 50px;
    text-align: center;
  }

    #test{
      margin-left:30px;
    }

    #seats{
      margin: 10px;
    }

    div.seat {
      color: #182C4E;
      height: 25px;
      width: 20px;
      line-height: 25px;
      margin: 3px;
      float:left;
      text-align: center;
      outline: none;
      font-size: 13px;
      border-radius: 5px;
    }

    #s_0{
      background-color: #58de4b;
    }

    #s_3 {
      background-color: #1a29b4;
      cursor: not-allowed;
    }

    #s_2 {
      background-color: #e6e447;
    }

    #s_1 {
      background-color: #472B34;
      cursor: not-allowed;
    }
    .line_02{
      padding: 0 20px 0;
      width: 600px;
      height:2px;
      margin: auto;
      line-height: 2px;
      color: black;
    }
</style>
