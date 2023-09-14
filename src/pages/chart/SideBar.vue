<template>
  <div>
    <input-module></input-module>
    <tool-bar></tool-bar>
  </div>
</template>

<script>
import InputModule from './sidebar/InputModule.vue';
import ToolBar from './sidebar/ToolBar.vue';

export default {
  components: {
    InputModule,
    ToolBar,
  },
};
</script>

<style scoped>

</style>
