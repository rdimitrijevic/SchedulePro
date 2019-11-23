<template>
  <div id="add-task">
    <div class="upper-task"><input type="text" class="task-heading" v-model="taskname" placeholder="Write name"> <button class="btn-add"><span>&#43;</span></button> </div>
    <textarea class="form-control" type="text" v-model="tasktxt" placeholder="Write description"></textarea>
  </div>
</template>

<script>
export default {
    name: "add-task",
    data() {
        return {
            taskname: '',
            tasktxt: ''
        }
    }
};
</script>

<style>
    #add-task {
        display: block;
        margin-bottom: 5px;
        border: 2px solid rgb(39, 180, 81);
        border-top-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .task-heading {
      overflow-x: hidden;
      width: 95%;
      padding-left: 5px;
    }

    .upper-task {
      padding: 5px 0px 5px 5px;
      text-align: left;
    }

    .btn-add span {
      display: inline-block;
      width: 30px;
    }

    .btn-add {
      margin-left: 5px;
      border-radius: 40%;
      border: transparent;
      transition: background-color 0.4s;
    }

    .btn-add:hover {
      background-color: rgb(39, 180, 81);
    }

    .form-control {
      resize: none;
    }
</style>
