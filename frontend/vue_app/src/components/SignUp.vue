<template>
  <div id="sign-up-page" :style="{marginLeft: leftMargin + '%'}">
    <Logo />
    <form>
      <div class="form-group">
        <label for="signupEmail">Enter your email</label>
        <input
          type="email"
          class="form-control"
          id="sign-up-email"
          v-model="email"
          placeholder="example@mail.com..."
        />
      </div>
      <div class="form-group">
        <label for="signupPass">Enter desired password</label>
        <input
          type="password"
          class="form-control"
          id="sign-up-pass"
          v-model="pass"
          placeholder="Desired password..."
        />
      </div>
      <div class="form-group">
        <label for="signupRepatPass">Repeat desired password</label>
        <input
          type="password"
          class="form-control"
          id="sign-up-rep-pass"
          v-model="repeatPass"
          placeholder="Repeat desired password..."
        />
      </div>
      <button class="btn btn-outline-primary" type="submit" @click="check" href="#">Confirm</button><br>
      <button type="button" class="btn btn-link" @click="$emit('signup-back')"> &lt; Back</button>
    </form>
    <div class="alert alert-danger" role="alert" v-show="alert">{{alertText}}</div>
  </div>
</template>

<script>
import Logo from "./Logo.vue";

export default {
  name: "sign-up-page",
  props:['leftMargin'],
  data() {
    return {
      alert: false,
      alertText: " ",
      email: "",
      pass: "",
      repeatPass: ""
    }
  },
  components: {
    Logo
  },
  /* eslint-disable no-console */
  methods: {
    check (event) {
      event.preventDefault();

      if(this.pass.length < 8){
        console.log("Pass to short");
        this.alert = true;
        this.alertText = "Your password must be at least 8 characters";
        return;
      }

      if(this.pass !== this.repeatPass){
        console.log("Pass not match");
        this.alert = true;
        this.alertText = "Your passwords do not match";
        return;
      }

      console.log("Email: " + this.email + " Pass: " + this.pass + " repeatPass: " + this.repeatPass);
    }
  }
};
</script>

<style scoped>
form {
  color: rgb(28, 83, 145);
  width: 40%;
  background-color: rgb(230, 230, 230);
  text-align: center;
  padding: 15px;
  border-radius: 6px;
  border: 4px solid rgb(28, 83, 145);
  box-shadow: 0 12px 16px 0 rgba(55, 121, 197, 0.24),
    0 17px 50px 0 rgba(55, 121, 197, 0.24);
  margin-top: 20px;
  margin-left: 1%;
  /* background-color: rgba(55, 121, 197, 0.5); */
}

.form-control {
  margin: auto;
  width: 70%;
}

.form-group {
  margin-bottom: 0;
  margin-top: 10px;
}

.btn-outline-primary {
  color: rgb(255, 255, 255);
  background-color: rgb(55, 121, 197);
  border: 2px solid rgb(55, 121, 197);
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px 30px;
  transition: background-color 0.8s, border 0.8s;
}

.btn-outline-primary:hover {
  background-color: rgb(28, 83, 145);
  border: 2px solid rgb(28, 83, 145);
}

#sign-up-page {
  margin-left: 30%;
  transition: transform 4s;
  transform: translate(5%, -0%);
}

#sign-up-page div:last-child {
  width: 40%;
  margin-top: 1%;
  margin-left: 1%;
}

.btn {
  display: inline_block;
}

.btn-link {
  color: rgb(55, 121, 197);
}

.btn-link:hover {
  color: rgb(28, 83, 145);
  text-decoration: none;
}
</style>