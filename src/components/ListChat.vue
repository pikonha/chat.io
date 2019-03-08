<template>
  <div id="scroll-content">
    <ul id="msg-list">
      <li class="msg-item" v-for="msg in messages" :key="msg.id">{{msg.text}}</li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "ListChat",
  data() {
    return {
      messages: [
        { id: 0, text: "Vegetables" },
        { id: 1, text: "Cheese" },
        { id: 2, text: "Meat" },
        { id: 3, text: "Whatever else humans are supposed to eat" }
      ]
    };
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

.msg-item {
  color: #2a0800;
  margin-top: 20px;
}
</style>
