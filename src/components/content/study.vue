<template>
<div id="study">

  <img src="../../Image/学习.png" height="300" width="300"/></div>
</template>

<script>
    import Search from "./search"
    export default {
      name: "study",
      data(){
        return{
          room_states:{}
        }
      } ,
      component : {
          Search
      }
    }
</script>

<style scoped>

</style>
