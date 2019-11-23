<template>
  <div id="logo-box">
    <div class="row">
      <h1>Schedule</h1>
    </div>
    <div class="row">
      <h1>Pro.</h1>
    </div>
  </div>
</template>

<script>
export default {
    name:"logo-box"
};
</script>

<style scoped>

@import url("https://fonts.googleapis.com/css?family=McLaren&display=swap");

h1 {
  font-family: "McLaren", "Arial", sans-serif;
  font-weight: 400;
  font-size: 500%;
  color: rgb(240, 240, 240);
  text-shadow: -2px 0 rgb(55, 121, 197), 0 2px rgb(55, 121, 197),
    2px 0 rgb(55, 121, 197), 0 -2px rgb(55, 121, 197);
  line-height: 80%;
}

/*******LOGO BOX*******/

.row:last-of-type h1 {
  margin-left: 320px;
}

#logo-box {
  margin-bottom: 0;
  margin: auto;
}

</style>