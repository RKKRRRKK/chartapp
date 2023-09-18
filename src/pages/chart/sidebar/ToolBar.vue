<template>
  <div class="container">
    <div v-show="state" class="toolbar">
      <h3>Size Settings</h3>
      <div v-show="state">
        Padding
        <input type="range" v-model="nodePadding" @input="updatePadding" />
      </div>
      <div v-show="state">
        Node Width
        <input type="range" v-model="nodeWidth" @input="updateNode" />
      </div>
      <div v-show="state">
        Font
        <input type="number" v-model="fontSize" @input="updateFont"/>
      </div>
      <div class="colortool" v-show="state">
        <h3>Color Settings</h3>
        <color-tool></color-tool>
      </div>
      <div class="colormode" v-show="state">
      <h3>change color mode</h3>
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
      fontSize: 12,
    };
  },

  computed: {
    state() {
      return this.$store.getters['sheets/getState'];
    },
  },

  methods: {
    updatePadding() {
      this.$store.dispatch('sheets/updateNodePadding', this.nodePadding * 2.5);
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
  align-items: center;  /* Horizontal centering */
  justify-content: flex-start; /* Vertical start, could be 'center' if you like */
  height: 100vh;  /* Full viewport height */
}

.toolbar {
  background-color: #df481f;
  width: 90%;
  max-width: 500px;  /* Optional, max-width to avoid an overly wide toolbar */
  border-radius: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
}

.colormode {
  display: flex;
  flex-direction: column;
}
</style>