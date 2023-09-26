<template>
  <div class="container">
    <user-auth class="login"></user-auth>
    <login-logo class="tres-logo"></login-logo>
  </div>
</template>

<script>
import LoginLogo from './LoginLogo.vue';
import UserAuth from './UserAuth.vue';

export default {
  components: {
    LoginLogo,
    UserAuth,
  },
};
</script>

<style>
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
