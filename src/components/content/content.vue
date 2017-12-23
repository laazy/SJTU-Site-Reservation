<template>
  <div id="content">
    <div class="btn-group btn-group-justified" role="group" aria-label="...">
      <div class="btn-group" role="group" id="study">
        <button type="button" class="btn btn-default" v-on:click="set(true)">学习场馆</button>
      </div>
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-default" v-on:click="set(false)">运动场馆</button>
      </div>
    </div>
    <study v-show="studyshow"></study>
    <sport v-show="sportshow"></sport>
  </div>
</template>

<script>
  var studyshow
  var sportshow
  import Study from "./study.vue";
  import Sport from "./sport.vue";
  export default{
    name: "Content",
    component :{
      Sport,
      Study
    },
    method:{
      set(value){
        studyshow = value
        sportshow = !value
      }
    }
  }
</script>

<style scoped>

</style>

