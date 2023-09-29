<template>
  <div class="parent">
    <div class="container">
      <input-module class="input"></input-module>
      <tool-bar class="settings"></tool-bar>
    </div>
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
.parent {
  display: flex;
  justify-content: center;
}

.container {
  background-color: #fffcfa;
  background: 
    repeating-linear-gradient(
      45deg,
      #ffffff, 
      #fdede7 1px, 
      #ffffff 3px, 
      #ffffff 8px
    );
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem;
  border-radius: 2.5rem;
  

  
}

.settings {
  height: 50%;
  width: 100%;
  
  
}

</style>