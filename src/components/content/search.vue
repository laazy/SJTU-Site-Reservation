<template>
    <div id="search">
      <select v-model="hall_type">
        <option v-for="(value,key) in room_list" v-bind:value="key">{{key}}</option>
      </select>
      <input type = "date" v-model="sel_time" id="date_input">
    </div>
</template>

<script>
    import rooms from "../../assets/room_list.json"
    export default {
        name: "search",
        data() {
            return {
                //prepare the data of the search box
                sel_time: "",
                site_type:"",
                hall_type:"",
                room_list:{}
            }
        },
        watch :{
            //watch the change of data, emit a pass_rosta to father_component when data changed
            hall_type:function(new_hall){
            var room_status = this.getRoomStatus(this.sel_time,new_hall);
            this.$emit("pass_rosta",room_status);
            },
            sel_time:function(new_time){
                var room_status = this.getRoomStatus(new_time,this.hall_type);
                this.$emit("pass_rosta",room_status);
            }
        },
        methods : {
            //check the validity of the data
            getRoomStatus(now_time, now_hall){
                if (now_time =="" || now_hall=="")
                  return
                var hall_rooms = this.room_list[now_hall]
                var ans = {}
                //for each room
                for (var i in hall_rooms){
                    var time_array = [0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0]
                    var room_info = hall_rooms[i]
                    //if room is not available, make it all occupied
                    if (room_info.state != "A") {
                      for (var j = 0; j < 48; j++)
                        time_array[j] = 1;
                    }
                    else {
                      //otherwise, set the occupied time to 1 and other free time stay 0
                      var occupied = room_info.ordered_time;
                      for (j in occupied) {
                        //console.log("j",j);
                        //console.log("o[j]",occupied[j])
                        //console.log("now_time",now_time)
                        if (j == now_time) {
                          //console.log("j_t",j)
                          //console.log("now_time_t",now_time)
                          for (var k = 0; k < occupied[j].length ; k = k+2) {
                            var begin = occupied[j][k]
                            var end = occupied[j][k+1]
                            //console.log("begin",begin)
                            //console.log("end",end)
                            for (var l = begin; l < end; l++)
                              time_array[l] = 1;
                          }
                        }
                      }
                    }
                    ans[i]=time_array;
                }
                return ans;
            },
            //offering methods to initiate the data
            initStudy() {
                this.site_type = "study_site"
                this.room_list = rooms["study_site"]
                this.hall_type = ""
            },
            initSport(){
                this.room_list = rooms["sport_site"]
                this.site_type = "sport_site"
                this.hall_type = ""
              //console.log("search init sport")
            }
        }

    }
</script>

<style scoped>
  select {
    /*Chrome和Firefox里面的边框是不一样的，所以复写了一下*/
    border: solid 1px #000;

    /*很关键：将默认的select选择框样式清除*/
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;

    /*在选择框的最右侧中间显示小箭头图片*/
    background: url("http://ourjs.github.io/static/2015/arrow.png") no-repeat scroll right center transparent;


    /*为下拉小箭头留出一点位置，避免被文字覆盖*/
    padding-right: 14px;
  }


  /*清除ie的默认选择框样式清除，隐藏下拉箭头*/
  select::-ms-expand { display: none; }
</style>
