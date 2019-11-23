<template>
  <div id="main-page">
    <div class="user-bar">
      <div class="user-info">User ID: {{email}}</div>
      <div class="user-info">No of tasks: {{tasknum}}</div>
      <div class="user-info">
        <button type="submit" class="logout-btn">Log out</button>
      </div>
      <!-- <p class="user-info"></p> -->
    </div>
    <div class="task-div">
      <AddTask />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  </div>
</template>

<script>
import Task from "./Task.vue";
import AddTask from "./AddTask.vue";

export default {
  name: "main-page",
  props: {
    email: {
      type: String,
      default: "example@exmp.com"
    },
    tasknum: {
      type: Number,
      default: 0
    }
  },
  components: {
    Task,
    AddTask
  }
};
</script>

<style scoped>
#main-page {
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
  overflow-y:scroll;
  border:rgb(55, 121, 197) 1px solid;
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
  text-decoration:underline;
  border: rgb(28, 83, 145) 1px solid;
  color: rgb(28, 83, 145);
}
</style>