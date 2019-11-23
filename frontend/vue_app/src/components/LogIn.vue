<template>
  <div id="log-in-page" :style="{marginLeft: leftMargin + '%'}">
    <Logo id="-logo" />
    <form>
      <div class="form-group">
        <label for="inputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label for="inputPassword">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <button type="submit" class="btn btn-outline-primary">Submit</button><br>
      <button type="button" class="btn btn-link" @click="$emit('log-in-back')"> &lt; Back</button>
    </form>
  </div>
</template>

<script>
import Logo from "./Logo.vue";

export default {
  name: "log-in-page",
  props: ['leftMargin'],
  components: {
    Logo
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
</style>