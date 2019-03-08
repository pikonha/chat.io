<template>
  <div id="scroll-content">
    <ul>
      <li v-for="msg in messages" :key="msg.id">{{msg.text}}</li>
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
  background-color: red;
}
</style>
