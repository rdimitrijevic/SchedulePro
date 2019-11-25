<template>
  <div id="main-page">
    <div class="user-bar">
      <div class="user-info">User ID: </div>
      <div class="user-info">No of tasks: {{ task_val }}</div>
      <div class="user-info">
        <button type="submit" class="logout-btn" @click="logOut">Log out</button>
      </div>
      <!-- <p class="user-info"></p> -->
    </div>
    <div class="task-div">
      <AddTask @add-task-err="showAlert"/>
      <Task v-for="task in tasks" :key="task.id" :task="task" />
    </div>
  </div>
</template>

<script>
import Task from "./Task.vue";
import AddTask from "./AddTask.vue";
import axios from 'axios';

/* eslint-disable no-console */
export default {
  name: "main-page",
  data() {
    return {
      task_val: 0,
      tasks: []
    };
  },
  components: {
    Task,
    AddTask
  },
  methods: {
    showAlert(msg) {
      this.alertText = msg;
      this.alert = true;
      console.log(this.alertText + " " + this.alert);
    },
    logOut(){
      this.tasks = [];
      this.task_val = 0;
      this.$router.push('/');
    }
  },
  created() {
    axios.get('http://localhost:3000/all')
      .then(res => {
        this.tasks = res.data;
        this.task_val = this.tasks.length;
      })
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
#main-page {
  display: block;
  margin: auto;
  width: 60%;
  background-color: rgb(230, 230, 230);
  height: 90%;
  padding: 5px;
  overflow: hidden;
  border-radius: 5px;
  border: 3px solid rgb(28, 83, 145);
}

.task-div {
  display: block;
  background-color: #ffffff;
  padding: 5px 2px 0px 3px;
  margin-top: 0;
  height: 94%;
  overflow-y: scroll;
  border: rgb(55, 121, 197) 1px solid;
}

.user-info:first-child {
  margin-left: 0%;
}

.user-info {
  display: inline-block;
  margin-bottom: 0;
  margin-left: 25%;
}

.user-bar {
  text-align: left;
  margin-bottom: 7px;
  margin-top: 3px;
  padding-left: 5px;
}

.logout-btn {
  background-color: inherit;
  border: rgb(230, 230, 230) 1px solid;
  border-radius: 3px;
  color: rgb(55, 121, 197);
  padding: 2px 12px;
  font-size: 85%;
  text-decoration: none;
  transition: border-color 0.4s, color 0.4s;
}

.logout-btn:hover {
  text-decoration: underline;
  border: rgb(28, 83, 145) 1px solid;
  color: rgb(28, 83, 145);
}
</style>
