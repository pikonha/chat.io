<template>
  <form action @submit.prevent>
    <input type="text" v-model="msg_input" placeholder="Insert your message...">
  </form>
</template>
    

<script>
export default {
  data() {
    return { msg_input: "", typing: false };
  }
};
</script>



<style scoped>
#chat-input {
  grid-area: "chat-input";
  background-color: green;
}
</style>
