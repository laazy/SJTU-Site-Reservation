<template>
    <div>
      <select v-model="hall_type">
        <option v-for="(value,key) in room_list" v-bind:value="key">{{key}}</option>
      </select>
      <input type = "date" v-model="time">
    </div>
</template>

<script>
    import rooms from "../../assets/room_list.json"
    export default {
        name: "search",
        mounted() {
            this.initTime();
            this.initRoomlist();
            //this.data().room_list = this.data().site_type;
        },
        data() {
            return {
                time: "",
                site_type:"study_site",
                hall_type:"main_library",
                //hall_type: this.site_type,
                room_list:rooms["study_site"]  //[this.hall_type]
            }
        },
        methods : {
            initTime() {
                var tmp = Date();
                this.time = tmp.toDateString();
            },
            initRoomlist(){
              this.room_list = rooms[this.site_type][this.hall_type]
              //this.site_type = " "
            }
        }
    }
</script>

<style scoped>

</style>
