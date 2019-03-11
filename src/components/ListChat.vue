<template>
  <div id="scroll-content">
    <message
      v-for="msg in messages"
      :key="msg.id"
      v-bind:content="msg.content"
      v-bind:type="msg.type"
    ></message>
  </div>
</template>


<script>
import Message from "./Message.vue";

export default {
  name: "ListChat",
  data() {
    return {
      messages: [
        { id: 1, content: "Cheese", type: 1 },
        { id: 2, content: "Meat", type: 2 },
        { id: 3, content: "Onion", type: 1 },
        { id: 4, content: "Whatever else humans are supposed to eat", type: 2 }
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
  display: flex;
  flex-direction: column;
}

#msg-list {
  list-style-type: none;
}
</style>
