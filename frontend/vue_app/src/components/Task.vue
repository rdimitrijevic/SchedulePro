<template>
  <div id="task">
    <div class="upper-task"><p class="task-heading">{{task.title}}</p> <button class="btn-delete"><span>&times;</span></button> </div>
    <textarea class="form-control" type="text" v-model="task.content" placeholder="Placeholder" readonly></textarea>
  </div>
</template>

<script>
export default {
    name: "task",
    props: ['task']
};
</script>

<style>
    #task {
        border: 2px solid rgb(28, 83, 145);
        border-top-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .task-heading {
      display: inline;
    }

    .upper-task {
      padding: 5px 0px 5px 10px;
      text-align: left;
    }

    .btn-delete span {
      display: inline-block;
      width: 30px;
    }

    .btn-delete {
      margin-left: 85%;
      border-radius: 40%;
      border: transparent;
      transition: background-color 0.4s;
    }

    .btn-delete:hover {
      background-color: rgb(228, 84, 115);
    }

    .form-control {
      resize: none;
    }

    #task {
      display: block;
      margin-bottom: 5px;
    }

</style>
