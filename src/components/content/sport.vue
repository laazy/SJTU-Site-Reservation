<template>
<div id="sport">

  <img src="../../Image/运动.png" height="300" width="300"/></div>
</template>

<script>
    import Search from "./search"
    export default {
      name: "sport",
      data(){
        return{
          room_states:{}
        }
      } ,
      components : {
          Search
        }
    }
</script>

<style scoped>

</style>
