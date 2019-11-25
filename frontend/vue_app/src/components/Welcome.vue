<template>
  <div id="welcome-form">
    <Logo />
    <div class="sign-log-btns">
      <div class="row">
        <router-link class="my-btn log-btn" :to="'/signin'">Log In</router-link>
        <router-link class="my-btn sign-btn" :to="'/signup'">Sign Up</router-link>
      </div>
    </div>
  </div>
</template>


<script>
import Logo from './Logo.vue';

export default {
  name: "welcome-form",
  components: {
    Logo
  }
};
</script>

<style scoped>

 /******MY BTN********/
 
.my-btn {
  color:  rgb(230, 230, 230);
  border: 2px solid rgb(28, 83, 145);
  display: inline-block;
  padding: 10px 40px;
  font-weight: 300;
  text-decoration: none;
  border-radius: 7px;
  margin-right: 15px;
  transition: background-color 0.8s, border 0.8s;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}


.sign-log-btns div {
  display: inline-block;
  margin-right: 15px;
  margin-left: -285px;
  padding: 20px;
}

/************LOG BTN************/

.log-btn {
  color: rgb(230, 230, 230);
  background-color: rgb(55, 121, 197);
  border: 2px solid rgb(55, 121, 197);
}

.log-btn:hover,
.log-btn:active {
  color: rgb(230, 230, 230);
  background-color: rgb(28, 83, 145);
  border: 2px solid rgb(28, 83, 145);
}

/**********SIGN BTN********** */
.sign-btn {
  color: rgb(230, 230, 230);
  background-color: rgba(55, 121, 197, 0.5);
  border: 2px solid rgb(28, 83, 145);
}

.sign-btn:hover,
.sign-btn:active {
  color: rgb(230, 230, 230);
  background-color: rgb(28, 83, 145);
  border: 2px solid rgb(28, 83, 145);
}


#welcome-form {
  position: relative;
  padding-top: 15%;
  margin-left: 34%;
  width: 600px;
}
</style>