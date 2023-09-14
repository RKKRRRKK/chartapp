<template>
<div class="container">
    <div class="toolbar">
      <div v-show="state">
        change padding
        <input type="number" v-model="nodePadding" @input="updatePadding" />
      </div>
      <div v-show="state">
        change font size
        <input type="number" v-model="fontSize" @input="updateFont" />
      </div>
      <div v-show="state">
        change node width
        <input type="number" v-model="nodeWidth" @input="updateNode" />
      </div>
      <div v-show="state">
        change color mode
        <input type="radio" v-model="colorMode" @input="updateColor" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    state() {
      return this.$store.getters['sheets/getState'];
    },
  },

  methods: {
    updatePadding() {
      this.$store.dispatch('sheets/updateNodePadding', (this.nodePadding * 5));
    },
    updateFont() {
      this.$store.dispatch('sheets/updateFontSize', (this.fontSize));
    },
    updateNode() {
      this.$store.dispatch('sheets/updateNodeWidth', (this.nodeWidth));
    },
    updateColor() {
      this.$store.dispatch('sheets/updateColorMode', (this.colorMode));
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.input {
  background-color: #df481f;
  width: 80%;
  height: 5rem;
  margin: 2rem;
}

.toolbar {
  background-color: #df481f;
  width: 80%;
  height: 15rem;
  margin: 2rem;
}
</style>
