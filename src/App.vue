<template>
  <div id="app">
  <navbar></navbar>
    <introduction></introduction>
    <!--search v-on:pass_rosta="getStatusList"></search-->
  <Content></Content>
    <study></study>
    <li v-for="(value,key) in status_list" >room:{{key}} status:{{value}}</li>
  </div>
</template>

<script>
  import Navbar from './components/Navbar/Navbar.vue'
  import Introduction from './components/Introduction/Introduction.vue'
  import Content from './components/content/Content.vue'
  import Search from "./components/content/search.vue"
  import Study from "./components/content/study.vue"

  export default {
  name: 'app',
  components: {
  Navbar,
  Introduction,
  Content,
  Search,
  Study,
  Content,
    Navbar,
    Introduction,
    Content,
    Search,
    Content,
    Study
  },
  data(){
  return{
  status_list:{}
  }
  },
  methods: {
  getStatusList:function(room_status){
  this.status_list = room_status;
  }
  }
  }


</script>

<style>
  #app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
