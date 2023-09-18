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
        <label>
          <input type="radio" v-model="colorMode" id="source" value="source" />
          Source
        </label>
        <label>
          <input type="radio" v-model="colorMode" id="target" value="target" />
          Target
        </label>
        <label>
          <input
            type="radio"
            v-model="colorMode"
            id="gradient"
            value="gradient"
          />
          Gradient
        </label>
        <label>
          <input type="radio" v-model="colorMode" id="none" value="none" />
          None
        </label>
      </div>
      <div v-show="state">
        <color-tool></color-tool>
      </div>
    </div>
  </div>
</template>

<script>
import ColorTool from './tools/ColorTool.vue';
export default {
  components: {
    ColorTool,
  },

  data() {
    return {
      colorMode: 'none',
    };
  },

  computed: {
    state() {
      return this.$store.getters['sheets/getState'];
    },
  },

  methods: {
    updatePadding() {
      this.$store.dispatch('sheets/updateNodePadding', this.nodePadding * 5);
    },
    updateFont() {
      this.$store.dispatch('sheets/updateFontSize', this.fontSize);
    },
    updateNode() {
      this.$store.dispatch('sheets/updateNodeWidth', this.nodeWidth);
    },
  },

  watch: {
    colorMode(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$store.dispatch('sheets/updateColorMode', newVal);
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.toolbar {
  background-color: #df481f;
  width: 80%;
  height: 15rem;
  margin: 2rem;
}
</style>
