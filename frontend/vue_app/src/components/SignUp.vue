<template>
  <div id="sign-up-page" :style="{marginLeft: 30 + '%', paddingTop: 5 + '%'}">
    <Logo />
    <form>
      <div class="form-group">
        <label for="signupEmail">Enter your email</label>
        <input
          type="email"
          class="form-control"
          id="sign-up-email"
          v-model="form.email"
          placeholder="example@mail.com..."
        />
      </div>
      <div class="form-group">
        <label for="signupPass">Enter desired password</label>
        <input
          type="password"
          class="form-control"
          id="sign-up-pass"
          v-model="form.pass"
          placeholder="Desired password..."
        />
      </div>
      <div class="form-group">
        <label for="signupRepatPass">Repeat desired password</label>
        <input
          type="password"
          class="form-control"
          id="sign-up-rep-pass"
          v-model="form.repeatPass"
          placeholder="Repeat desired password..."
        />
      </div>
      <b-button class="btn btn-outline-primary" type="submit" @click="submit">Confirm</b-button><br>
      <router-link class="btn btn-link" :to="'/'">
        &lt; Back
      </router-link>
    </form>
    <div class="alert alert-danger" role="alert" v-show="alert">{{alertText}}</div>
  </div>
</template>

<script>
import Logo from "./Logo.vue";
import axios from 'axios';

export default {
  name: "sign-up-page",
  data() {
    return {
      alert: false,
      alertText: " ",
      form: {
        email: "",
        pass: "",
        repeatPass: ""
      }
    }
  },
  components: {
    Logo
  },
  /* eslint-disable no-console */
  methods: {
    submit (event) {
      event.preventDefault();

      if(this.form.email.length < 1){
        this.alert = true;
        this.alertText = "No email entered";
        return;
      }

      if(this.form.email.indexOf("@") === -1){
        this.alert = true;
        this.alertText = "Not a valid email adress";
        return;
      }

      if(this.form.pass.length < 8){
        this.alert = true;
        this.alertText = "Your password must be at least 8 characters";
        return;
      }

      if(this.form.pass !== this.form.repeatPass){
        this.alert = true;
        this.alertText = "Your passwords do not match";
        return;
      }

      const userInput = {
        email: this.form.email,
        password: this.form.pass
      };

      axios.post("http://localhost:3000/usr/sign-up", userInput)
        .then((res) => {
          if(res){
            this.$router.push('/signin');
          } 
        })
        .catch( err => {
          if(err.message === "Request failed with status code 400"){
            this.alert = true;
            this.alertText = "Email allready exists";
          }

          if(err === "Request failed with status code 500") {
            this.alert = true;
            this.alertText = "Server error: try again later";
          }
        });
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