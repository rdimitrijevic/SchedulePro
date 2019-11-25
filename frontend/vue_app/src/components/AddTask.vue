<template>
  <div id="add-task">
    <div class="upper-task">
      <input
        type="text"
        class="task-heading"
        v-model="form.taskname"
        placeholder="Write name"
      />
      <button class="btn-add" @click="addTask"><span>&#43;</span></button>
    </div>
    <b-form-textarea
      class="form-control"
      type="text"
      v-model="form.tasktxt"
      placeholder="Write description"
    ></b-form-textarea>
  </div>
</template>

<script>
import axios from "axios";
/*eslint-disable no-console*/
export default {
  name: "add-task",
  data() {
    return {
      form: {
        taskname: "",
        tasktxt: ""
      }
    };
  },
  methods: {
    validate() {
      if (this.form.tasktxt.lenght === 0) {
        this.$emit("add-task-err", "Task must contain a description");
        return false;
      } else if (!this.form.taskname.length === 0) {
        this.$emit("add-task-err", "Task must have a title");
        return false;
      }

      return true;
    },
    addTask(event) {
      event.preventDefault();
      if (this.validate()) {
        const parameters = {
          owner_email: null,
          title: this.form.taskname,
          content: this.form.tasktxt
        };

        axios.post("http://localhost:3000/addtask", parameters)
          .then(response => {
            console.log("axios");
            if (response.success) {
              console.log(response.succes);
              this.form.taskname = '';
              this.form.tasktxt = '';
              window.location.reload();
            }
          });
      }
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
