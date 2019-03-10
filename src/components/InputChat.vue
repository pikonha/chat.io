<template>
  <div id="chat-input">
    <form action @submit.prevent="sendMessage()">
      <input id="inputChat" type="text" v-model="message" placeholder="Enter your message...">
      <button class="submitChat">Send</button>
    </form>
  </div>
</template>
    

<script>
import io from "socket.io-client";

export default {
  name: "InputChat",
  data() {
    return {
      user: "",
      message: "",
      messages: [],
      typing: false,
      socket: io("localhost:3000")
    };
  },
  methods: {
    sendMessage() {
      this.socket.emit("send_msg", this.message);
      this.message = "";
    }
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

.submitChat {
  margin-left: 10px;
  border-radius: 10px;
  width: 100px;

  cursor: pointer;
  background: rgba(197, 62, 126, 0.33) !important;
}
</style>
