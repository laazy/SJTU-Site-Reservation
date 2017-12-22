<template>
  <div class="btn-group btn-group-justified" role="group" aria-label="...">
    <div class="btn-group" role="group" id="study">
      <button type="button" class="btn btn-default" v-on:click="set(true)">学习场馆</button>
    </div>
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-default" v-on:click="set(false)">运动场馆</button>
    </div>
  </div>
</template>

<script>


  export default {
    el: '#study',

    method:{
      function set(value) {
    studyshow = value
  }
  }
  }


</script>

<style>

</style>

