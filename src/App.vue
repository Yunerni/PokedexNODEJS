<template>
<div class="bg">
  <div id="app">

    <router-view/>
  </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.bg{
  height: 100%;
    background-image: url('https://hdwallpaperim.com/wp-content/uploads/2017/08/24/103364-Mewtwo-Pok%C3%A9mon-white_background-simple.jpg');
  background-size: cover;
}
</style>
