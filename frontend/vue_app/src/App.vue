<template>
  <div id="app">    
    <router-view />
  </div>
</template>

<script>


/* eslint-disable no-console */
export default {
  name: "app"
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

html {
  font-size: 20px;
  font-weight: 300;
  overflow-x: hidden;
}

#app {
  background-image: linear-gradient(
      rgba(100, 100, 100, 0.5),
      rgba(100, 100, 100, 0.5)
    ),
    url(./resources/img/IT-team-security-assets-.jpg);
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  text-align: center;
}
</style>
