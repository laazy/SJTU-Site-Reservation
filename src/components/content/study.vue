<template>
  <div id="study">
    <search v-on:pass_rosta="getRoomStates"></search>
    <!--p  v-for="(value,key) in room_states">room:{{key}} status:{{value}}</p-->
    <li v-for="(value,key) in room_states " >
      room:{{key}}   23
      <option v-for="valuex in value" ></option>
        <option v-if = "valuex == 1" class="timeline-available" ></option>
        <option v-else ="valuex == 0" class="timeline-unavailable"></option>
    </li>
  </div>
</template>

<script>
    import Search from "./search.vue"
    export default {
      name: "study",
      data(){
        return{
          room_states:{"abhhhcd":"1234"}
        }
      },
      methods: {
        getRoomStates:function(room_status){
          console.log("have get the data",room_status);
          this.room_states = room_status;
        }
      },
      components : {
          Search
      }
    }

</script>

<style type="text/css">
  option.timeline-available {
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
  option.timeline-unavailable {
  color: #472B34;
  height: 25px;
  width: 10px;
  line-height: 25px;
  margin: 3px;
  float: left;
  text-align: center;
  outline: none;
  font-size: 13px;
  }
</style>
