<template>
<<<<<<< HEAD
<div id="study">

  <img src="../../Image/学习.png" height="300" width="300"/></div>
=======
  <div id="study">
    <search v-on:pass_rosta="getRoomStates"></search>
    <dem class="demo">
    <!--p  v-for="(value,key) in room_states">room:{{key}} status:{{value}}</p-->
      <div id="seat-map" class="seatCharts-container" tabindex="0" >
    <div v-for="(value,key) in room_states " >
    <div class="seatCharts-row"></div>
     <div class="seatCharts-cell seatCharts-space">{{key}}</div>
     <div class="seatCharts-cell seatCharts-space"></div>
     <div class="seatCharts-cell seatCharts-space"></div>
      <div v-for="valuex in value" >
        <div v-if = "valuex == 0" id="2_1" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available" ></div>
        <div v-else ="valuex == 1" id="2_1" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell unavailable"></div>
      </div>
      
   </div>
     
  </div>
</dem>
</div>
>>>>>>> df2c77243c1afa5a37f55d98d825f63ea130bc67
</template>

<script>
    import Search from "./search.vue"
    export default {
      name: "study",
      data(){
        return{
          room_states:{}
        }
<<<<<<< HEAD
      } ,
=======
      },
      methods: {
        getRoomStates:function(room_status){
          console.log("have get the data",room_status);
          this.room_states = room_status;
        }
      },
>>>>>>> df2c77243c1afa5a37f55d98d825f63ea130bc67
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
      width: 1600px;
      margin:  0 auto;
      min-height: 50px;
      text-align: center;
    }

    @media screen and (max-width: 1200px) {
      .demo {
        width: 1600px
      }
    }

    .front {
      width: 790px;
      margin: 5px 32px 45px 32px;
      background-color: #f0f0f0;
      color: #666;
      text-align: center;
      padding: 3px;
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
      width: 10px;
      line-height: 25px;
      margin: 3px;
      float: left;
      text-align: center;
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
      background-color: #B9DEA0;
    }

    div.seatCharts-seat.focused {
      background-color: #76B474;
      border: none;
    }

    div.seatCharts-seat.selected {
      background-color: #E6CAC4;
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
      overflow-x: none;
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
