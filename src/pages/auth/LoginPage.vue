<template>
  <div class="container">
    <user-auth class="login"></user-auth>
  </div>
</template>

<script>
import UserAuth from './UserAuth.vue';

export default {
  components: {
    UserAuth,
  },
};
</script>

<style scoped>
.tres-logo {
  overflow: hidden; /* To ensure no overflow from the canvas */
  margin: 2rem; /* Center it horizontally and add some margin on top and bottom */
  background-color: black;
  margin-top: 10rem;
}

.login {
    width: 50%;
}

.container {
    display: flex;
    flex-direction: row;
    height: 60vh;
    width: 100vw;
}
</style>
