<template>
  <div id="app" v-if="!render" :style="{paddingTop: sectionPadding + '%'}">
    <Welcome
      v-show="value === 1"
      :leftMargin="leftPadding"
      v-on:sign-up-event="value = 3"
      v-on:log-in-event="value = 2"
    ></Welcome>
    <LogIn :leftMargin="leftPadding" v-show="value === 2" v-on:log-in-back="value = 1"></LogIn>
    <SignUp :leftMargin="leftPadding" v-show="value === 3" v-on:signup-back="value = 1"></SignUp>
    <MainPage v-if="value === 4"/>
  </div>
</template>

<script>
import LogIn from "./components/LogIn.vue";
import Welcome from "./components/Welcome.vue";
import SignUp from "./components/SignUp.vue";
import MainPage from "./components/MainPage.vue";


/* eslint-disable no-console */
export default {
  name: "app",
  components: {
    LogIn,
    Welcome,
    SignUp,
    MainPage
  },
  data: function() {
    return {
      value: 4,
      sectionPadding: 8,
      render: false,
      leftPadding: 30
    };
  },
  watch: {
    value:{
      handler() {
        if(this.value === 1){
          this.sectionPadding = 15;
          this.leftPadding = 34;
        } 
        if(this.value === 2 || this.value === 3){
          this.sectionPadding = 5;
          this.leftPadding = 30;
        }
        if(this.value === 4){
          this.sectionPadding = 8;
          this.leftPadding = 30;
        }
      }
    }
  }
};
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
