<template>
  <the-header v-if="!hideHeader"></the-header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>


<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader
  }, 

computed: {

  hideHeader() {
      return this.$route.meta.hideHeader;
    }
}
};


</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

.route-enter-from {
  opacity: 0;
}

.route-leave-to {
  opacity: 0;
}

.route-enter-active {
  transition: all 0.1s ease-out;
}

.route-leave-active {
  transition: all 0.1s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>