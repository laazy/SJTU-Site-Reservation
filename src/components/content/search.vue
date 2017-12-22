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
                      break;
                    }
                    var occupied = room_info.ordered_time;
                    for ( j in occupied){
                      if( j == now_time){
                        for( var k=0;k<occupied[j].length;k+=2)
                          for (var l=occupied[j][k];k<occupied[j][k+1];l++)
                            time_array[l]=1
                        break;
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
