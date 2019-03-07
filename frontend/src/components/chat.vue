<template>
  <div id="main-container">
    <aside id="sidebar"></aside>
    <main id="chat-messages"></main>
    <form action id="chat-input"></form>
  </div>
</template>


<script>
export default {};
</script>


<style scoped>
#sidebar {
  grid-area: "sidebar";
  background-color: red;
}

#chat-messages {
  grid-area: "chat-message";
  background-color: blue;
}
</style>
