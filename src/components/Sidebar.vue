<template>
  <div id="sidebar-chat">
    <h2>{{text}}</h2>
  </div>
</template>

<script>
export default {
  name: "SidebarChat",
  data() {
    return { text: "Sidebar" };
  }
};
</script>


<style>
#sidebar-chat {
  grid-area: sidebar;
  background-color: blueviolet;
}
</style>
