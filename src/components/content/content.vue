<template>
  <div id="content">
    <div class="btn-group btn-group-justified" role="group" aria-label="...">
      <div class="btn-group" role="group" id="study">
        <button type="button" class="btn btn-default" v-on:click="setStudy">学习场馆</button>
      </div>
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-default" v-on:click="setSport">运动场馆</button>
      </div>
    </div>
    <study v-show="study_show">ada</study>
    <sport v-show="sport_show">dsd</sport>
  </div>
</template>

<script>
  import Study from "./study.vue";
  import Sport from "./sport.vue";
  export default{
    name: "Content",
    data(){
      return{
        study_show:false,
        sport_show:false
      }
    },
    components:{
      Study,
      Sport
    },
    methods:{
      setStudy:function(event){
        this.study_show = true;
        this.sport_show = false;
      },
      setSport:function(event){
        this.study_show = false;
        this.sport_show = true;
      }
    }
  }
</script>

<style scoped>

</style>

