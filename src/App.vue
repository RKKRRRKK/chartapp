<template>
  <the-header class="the_header"></the-header>
  <router-view class="the_router"></router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader
  }  
}
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
</style>