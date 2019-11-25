<template>
  <div id="app">
    <!-- <Welcome /> -->
    
    <router-view />
    <!-- <Welcome
      v-show="value === 1"
      :leftMargin="leftPadding"
      v-on:sign-up-event="value = 3"
      v-on:log-in-event="value = 2"
    ></Welcome>
    <LogIn
      :leftMargin="leftPadding"
      v-show="value === 2"
      v-on:log-in-back="value = 1"
      @log-in-ok="loginOk"
    ></LogIn>
    <SignUp
      :leftMargin="leftPadding"
      v-show="value === 3"
      v-on:signup-back="value = 1"
      @signup-ok="loginOk"
    ></SignUp>
    <MainPage v-if="value === 4" :tasks="tasksArr" /> -->
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
