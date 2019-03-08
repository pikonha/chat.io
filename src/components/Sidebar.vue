<template>
  <div id="sidebar-chat">
    <img id="user-icon" src="../assets/user.png" alt="User Icon">
  </div>
</template>

<script>
export default {
  name: "SidebarChat",
  data() {
    return { user_img: UserImg };
  }
};
</script>


<style>
#sidebar-chat {
  grid-area: sidebar;
  background: #775144;
}

#user-icon {
  max-width: 70%;
  border-radius: 100px;
  margin: 20px;
}
</style>
