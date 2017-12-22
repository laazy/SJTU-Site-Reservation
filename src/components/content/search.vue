<template>
    <div>
      <select v-model="hall_type">
        <option value="hash table">1222</option>
        <option v-for="(key,value) in room_list" v-bind:value="key">{{key}}</option>
      </select>
      <input type = "date" v-model="time" >
      <p>{{hall_type}}</p>
      <p v-for="(key,value) in room_list">{{key}}  {{value}}</p>
    </div>
</template>

<script>
    import rooms from "../../assets/room_list.json"
    export default {
        name: "search",
        created() {
            this.initTime();
            this.initRoomlist();
            console.log(rooms);
            //this.data().room_list = this.data().site_type;
        },
        data() {
            return {
                time: "",
                site_type:"study_site",
                hall_type:"main_library",
                room_list : rooms
            }
        },
        methods : {
            initTime() {
                var tmp = Date();
                this.time = tmp.toDateString();
            },
            initRoomlist(){
              this.room_list = rooms[this.site_type][this.hall_type];
            }
        }
    }
</script>

<style scoped>

</style>
