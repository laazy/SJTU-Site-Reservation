<template>
<div id="sport">
  <!--img src="../../Image/运动.png" height="300" width="300"/-->
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
        <line class="line_02"></line>
      </div>
    </div>
  </div>

  <button id="submit_button" @click="submitOrder" class="btn-success">确认提交</button>
  <br>
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
  import Search from "./search"
    export default {
      name: "sport",
      data(){
        return{
          room_states:{},
          select_room:"",
          select_amount:0
        }
      } ,
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
          this.$refs.search.initSport()
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
  .demo {
    background-color: #f4f4ff;
    width: 760px;
    margin:  0 auto;
    min-height: 300px;
    text-align: center;
  }

  @media screen and (max-width: 1200px) {
    .demo {
      width: 1200px;
      margin: 40px auto 0 auto;
    }
  }

  #seats{
    margin-left: 35px;
  }

  #rooms{
    margin-left:10px;
    width : 800px;
    height: 50px;
    text-align: center;
  }

  .front {
    width: 790px;
    margin: 5px 32px 45px 32px;
    background-color: #f0f0f0;
    color: #666;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
  }

  .booking-details {
    float: right;
    position: relative;
    width: 200px;
    height: 450px;
  }

  .booking-details h3 {
    margin: 5px 5px 0 0;
    font-size: 16px;
  }

  .booking-details p {
    line-height: 26px;
    font-size: 16px;
    color: #999
  }

  .booking-details p span {
    color: #666
  }

  div.seatCharts-cell {
    color: #182C4E;
    height: 25px;
    width: 20px;
    line-height: 25px;
    margin: 3px;
    float: left;
    text-align: down;
    outline: none;
    font-size: 13px;
  }

  div.seatCharts-seat {
    color: #fff;
    cursor: pointer;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  div.seatCharts-row {
    height: 25px;
  }

  div.seatCharts-seat.available {
    background-color: #58de4b;
  }

  div.seatCharts-seat.auditting {
    background-color: #1a29b4;
    cursor: not-allowed;
  }

  div.seatCharts-seat.selected {
    background-color: #e6e447;
  }

  div.seatCharts-seat.unavailable {
    background-color: #472B34;
    cursor: not-allowed;
  }

  div.seatCharts-container {
    border-right: 1px dotted #adadad;
    width: 860px;
    padding: 20px;
    text-align: center;
  }

  div.seatCharts-legend {
    padding-left: 0px;
    position: absolute;
    bottom: 16px;
  }

  div.seatCharts-legend2 {
    padding-left: 0px;
    position: absolute;
    bottom: 46px;
  }

  ul.seatCharts-legendList {
    padding-left: 0px;
  }

  .seatCharts-legendItem {
    float: left;
    width: 90px;
    margin-top: 10px;
    line-height: 2;
  }

  span.seatCharts-legendDescription {
    margin-left: 5px;
    line-height: 30px;
  }

  .checkout-button {
    display: block;
    width: 80px;
    height: 24px;
    line-height: 20px;
    margin: 10px auto;
    border: 1px solid #999;
    font-size: 14px;
    cursor: pointer
  }

  #selected-seats {
    max-height: 150px;
    overflow-y: auto;
    overflow-x: auto;
    width: 200px;
  }

  #selected-seats li {
    float: left;
    width: 72px;
    height: 26px;
    line-height: 26px;
    border: 1px solid #d3d3d3;
    background: #f7f7f7;
    margin: 6px;
    font-size: 14px;
    font-weight: bold;
    text-align: center
  }
</style>

