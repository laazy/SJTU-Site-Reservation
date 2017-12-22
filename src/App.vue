<template>
  <div id="app">
  <navbar></navbar>
    <introduction></introduction>
<<<<<<< HEAD
  <content>
    <search></search>
  </content>
=======
  <Content></Content>
>>>>>>> origin/板块选择
  </div>
</template>

<script>
  import Navbar from './components/Navbar/Navbar.vue'
  import Introduction from './components/Introduction/Introduction.vue'
  import Content from './components/content/Content.vue'
  import Search from "./components/content/search.vue"

export default {
  name: 'app',
  components: {
    Navbar,
    Introduction,
    Content,
    Search,
    Content
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
