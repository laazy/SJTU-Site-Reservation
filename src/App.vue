<template>
  <div id="app">
  <navbar></navbar>
    <introduction></introduction>
  <content></content>
  </div>
</template>

<script>
  import Navbar from './components/Navbar/Navbar.vue'
  import Introduction from './components/Introduction/Introduction.vue'
  import content from './components/content/content.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Introduction,
    content
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
