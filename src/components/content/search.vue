<template>
    <div id="search">
      <select v-model="hall_type">
        <option v-for="(value,key) in room_list" v-bind:value="key">{{key}}</option>
      </select>
      <input type = "date" v-model="sel_time">
    </div>
</template>

<script>
    import rooms from "../../assets/room_list.json"
    export default {
        name: "search",
        data() {
            return {
                sel_time: "",
                site_type:"study_site",
                hall_type:"main_library",
                //hall_type: this.site_type,
                room_list:rooms["study_site"]  //[this.hall_type]
            }
        },
        watch :{
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
            getRoomStatus(now_time, now_hall){
                var hall_rooms = this.room_list[now_hall]
                var ans = {}
                for (var i in hall_rooms){
                    var time_array = [0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0]
                    var room_info = hall_rooms[i]
                    if (room_info.state != "A") {
                      for (var j = 0; j < 48; j++)
                        time_array[j] = 1;
                    }
                    else {
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
            initStudy() {
                this.site_type = "study_site"
                this.room_list = rooms["study_site"]
            },
            initSport(){
                this.room_list = rooms["sport_site"]
                this.site_type = "sport_site"
            }
        }
    }
</script>

<style scoped>

</style>
