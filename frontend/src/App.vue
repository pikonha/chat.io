<template>
  <div id="grid-container">
    <sidebarChat></sidebarChat>
    <listChat></listChat>
    <inputChat></inputChat>
  </div>
</template>


<script>
import ListChat from "./components/ListChat.vue";
import InputChat from "./components/InputChat.vue";
import SidebarChat from "./components/Sidebar.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    ListChat,
    InputChat,
    SidebarChat
  }
};
</script>


<style>
#grid-container {
  height: 100vh;
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-template-rows: 1fr 2fr 100px;
  grid-template-areas:
    "sidebar chat-message"
    "sidebar chat-message"
    "sidebar chat-input";
}
</style>
