<template>
  <div class="container">
    <user-auth class="login"></user-auth>
    <div class="gradient"></div>
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

.login {
    width: 50%;
}

.container {
    display: flex;
    flex-direction: column;
    height: 95.5vh;
    width: 100vw;
    background-color: #fefbfa;
    background-image: url('../../../public/peaks.svg');
    justify-content: space-between;
}



@keyframes flicker {
  0% {
    opacity: 0.8;
    filter: hue-rotate(0deg);
    scale: 1

  }
  25% {
    opacity: 0.8;
    filter: hue-rotate(-10deg);
    scale: 1.1;

  }


  65% {
    opacity: 0.6;
    filter: hue-rotate(10deg);
    scale: 0.9
 
  }

  100% {
    opacity: 0.8;
    filter: hue-rotate(0deg);
    scale: 1;
  }
}
</style>
