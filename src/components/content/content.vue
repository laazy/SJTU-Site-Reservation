<template>
  <div id="content">
    <introduction v-show="intro_show"></introduction>
    <div class="btn-group btn-group-justified" role="group" aria-label="...">
      <div class="btn-group" role="group" id="study">
        <button type="button" class="btn btn-default" v-on:click="setStudy">学习场馆</button>
      </div>
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-default" v-on:click="setSport">运动场馆</button>
      </div>
    </div>
    <study ref="study" v-show="study_show"></study>
    <sport ref="sport" v-show="sport_show"></sport>
  </div>
</template>

<script>
  import Study from "./study.vue";
  import Sport from "./sport.vue";
  import Introduction from "../Introduction/Introduction"

  export default{
    name: "Content",
    data(){
      return{
        study_show:false,
        sport_show:false,
        intro_show:true
      }
    },
    components:{
      Study,
      Sport,
      Introduction
    },
    methods:{
      setStudy:function(event){
        this.intro_show = false;
        this.study_show = true;
        this.sport_show = false;
        this.$refs.study.init();
      },
      setSport:function(event){
        this.intro_show = false;
        this.study_show = false;
        this.sport_show = true;
        this.$refs.sport.init();
        //console.log("content call sport")
      }
    }
  }
</script>

<style scoped>

</style>

