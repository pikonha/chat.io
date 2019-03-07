<template>
  <h1>{{username}}</h1>
</template>


<script>
export default {
  name: "App",
  data() {
    return { username: "Lucas" };
  }
};
</script>


<style>
#app {
  height: 100vh;
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 1fr 100px;
  grid-template-areas:
    "sidebar chat-message"
    "sidebar chat-input";
}
</style>
