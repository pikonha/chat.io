<template>
  <span v-bind:class="[classObject]">{{content}}</span>
</template>

<script>
export default {
  name: "Message",
  props: ["content", "type"],
  date() {
    return {
      starred: false
    };
  },
  computed: {
    classObject: function() {
      return {
        msg_item: true,
        starred: this.starred,
        sended: this.type == 1,
        received: this.type == 2
      };
    }
  }
};
</script>

<style scoped>
.msg_item {
  color: #2a0800;
  margin: 10px;
  width: 100%;
}

.received {
  color: red;
}

.sended {
  color: green;
}

.starred {
}
</style>
