<template>
  <div class="msg-contaier">
    <img :src="this.message.user_avatar" class="avatar" alt="User avatar">
    <p :class="msg_origin" class="msg_content">{{message.content}}</p>
    <!-- <span class="timePosition" v-bind="msg_time">{{this.msg_time}}</span> -->
  </div>
</template>

<script>
export default {
  name: "Message",
  props: ["message"],
  date() {
    return {
      // msg_time: new Date().toISOString().split("T")
    };
  },
  computed: {
    msg_origin() {
      return {
        sended: this.message.type == 1,
        received: this.message.type == 2,
        starred: this.message.starred
      };
    }
  }
};
</script>

<style scoped>
.msg_container {
  margin-top: 10px;
}

.msg_content {
  width: 100%;
  display: inline-block;
}

.received {
  color: red;
}

.sended {
  color: green;
}

.starred {
}

.avatar {
  max-width: 40px;
}
</style>
