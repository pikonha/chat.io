<template>
  <div id="scroll-content">
    <message v-for="msg in messages" :key="msg.id" :message="msg"></message>
  </div>
</template>


<script>
import Message from "./Message.vue";
import Ninja from "../assets/ninja.png";
import Penguim from "../assets/penguim.png";
import Toast from "../assets/toast.png";
import User from "../assets/user.png";

export default {
  name: "ListChat",
  data() {
    return {
      messages: [
        {
          id: 1,
          content: "Cheese",
          type: 1,
          user_avatar: User,
          starred: true
        },
        {
          id: 2,
          content: "Meat",
          type: 2,
          user_avatar: Penguim,
          starred: false
        },
        {
          id: 3,
          content: "Onion",
          type: 2,
          user_avatar: Toast,
          starred: true
        },
        {
          id: 4,
          content: "Whatever else humans are supposed to eat",
          type: 1,
          user_avatar: User,
          starred: false
        },
        {
          id: 5,
          content: "Whatever else humans are supposed to eat",
          type: 2,
          user_avatar: Ninja,
          starred: false
        }
      ]
    };
  },
  components: {
    Message
  }
};
</script>


<style>
#scroll-content {
  grid-area: chat-message;
  background: #f4dbd8;
}

#msg-list {
  list-style-type: none;
}
</style>
