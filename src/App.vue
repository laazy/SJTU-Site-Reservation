﻿<template>
  <div id="app">
  <navbar></navbar>
  <Content></Content>
  </div>
</template>

<script>
  import Navbar from './components/Navbar/Navbar.vue'
  import Content from './components/content/Content.vue'
  export default {
  name: 'app',
  components: {
    Navbar,
    Content
  },
  data(){
    return{
      status_list:{}
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
