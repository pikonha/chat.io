<template>
  <div id="chat-input">
    <form action @submit.prevent>
      <input type="text" v-model="msg_input" placeholder="Insert your message...">
    </form>
  </div>
</template>
    

<script>
export default {
  name: "InputChat",
  data() {
    return { msg_input: "", typing: false };
  }
};
</script>



<style scoped>
#chat-input {
  grid-area: chat-input;
  background-color: green;
}
</style>
