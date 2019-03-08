<template>
  <div id="chat-input">
    <form action @submit.prevent>
      <input id="inputChat" type="text" v-model="msg_input" placeholder="Enter your message...">
      <button class="submitChat">Send</button>
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
  background: #c09891;
  display: flex;
  justify-content: center;
  align-items: center;
}

#inputChat {
}

.submitChat {
  margin-left: 10px;
  border-radius: 10px;
  width: 100px;

  cursor: pointer;
  background: rgba(197, 62, 126, 0.33) !important;
}
</style>
