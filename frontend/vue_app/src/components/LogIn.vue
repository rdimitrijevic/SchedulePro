<template>
  <div id="log-in-page" :style="{ marginLeft: 30 + '%', paddingTop: 5 + '%' }">
    <Logo id="-logo" />
    <form>
      <div class="form-group">
        <label for="inputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="form.emailmodel"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label for="inputPassword">Password</label>
        <input
          v-model="form.passmodel"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <b-button
        type="submit"
        class="btn btn-outline-primary"
        @click="loginMethod"
        >Submit</b-button
      ><br />
      <router-link class="btn btn-link" :to="'/'">
        &lt; Back
      </router-link>
    </form>
    <div class="alert alert-danger" role="alert" v-show="alert">
      {{ alertText }}
    </div>
  </div>
</template>

<script>
import Logo from "./Logo.vue";
import axios from "axios";
/*eslint-disable no-console */
export default {
  name: "log-in-page",
  data() {
    return {
      form: {
        passmodel: "",
        emailmodel: ""
      },
      alert: false,
      alertText: ""
    };
  },
  components: {
    Logo
  },
  methods: {
    loginMethod(event) {
      event.preventDefault();
      if (this.form.emailmodel.length === 0) {
        this.alert = true;
        this.alertText = "Please enter a valid email";
        return;
      }
      if (this.form.passmodel.length < 8) {
        this.alert = true;
        this.alertText = "Please enter a valid password";
        return;
      }

      const data = {
        email: this.form.emailmodel,
        password: this.form.passmodel
      };

      console.log(data);
      axios.post("http://localhost:3000/usr/login", data)
        .then(res => {
          if(res.data.error){
            this.alert = true;
            this.alertText = res.data.error;
          } else {
            console.log(res.data.token);
            this.$cookie.set('user-token', res.data.token, { expiresIn: '2h'});
            this.$router.push('/tasks');
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

.btn {
  display: inline-block;
}

.form-control {
  margin: auto;
  width: 70%;
}

.form-group {
  margin-bottom: 0;
  margin-top: 10px;
}

.btn-link {
  color: rgb(55, 121, 197);
}

.btn-link:hover {
  color: rgb(28, 83, 145);
  text-decoration: none;
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

#log-in-page {
  align-self: center;
  margin-left: auto;
  position: relative;
  transition: transform 4s;
  transform: translate(5%, -0%);
}

#log-in-page div:last-child {
  width: 40%;
  margin-top: 1%;
  margin-left: 1%;
}
</style>
