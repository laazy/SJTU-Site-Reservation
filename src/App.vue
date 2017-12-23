<template>
  <div id="app">
  <navbar></navbar>
  <Content></Content>
    <li v-for="(value,key) in status_list" >room:{{key}} status:{{value}}</li>
  </div>
</template>

<script>
  import Navbar from './components/Navbar/Navbar.vue'
  import Content from "./components/content/content.vue"

export default {
  name: 'app',
  components: {
    Navbar,
    Content,
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
