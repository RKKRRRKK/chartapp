<template>
  <div class="container">
    <div v-show="state" class="toolbar">
      <h2>Chart Settings</h2>
      <h3>Size</h3>
      <div class="size">
      <div class="range" v-show="state">
        Padding:
        <input class="range" type="range" v-model="nodePadding" @input="updatePadding" />
      </div>
      <div v-show="state">
        Node Width:
        <input class="range" type="range" v-model="nodeWidth" @input="updateNode" />
      </div>
      <div v-show="state">
        <label>Font Size:
        <input class="input" type="number" v-model="fontSize" @input="updateFont"/>
      </label>
      </div>
      </div>
      <div class="colortool" v-show="state">
        <h3>Color</h3>
        <div class="colors" v-show="state">
        <color-tool></color-tool>
      <div v-show="state">
     <p>Color Mode:</p>
      <div class="colormode" v-show="state">
        <label class="radio">
          <input type="radio" v-model="colorMode" id="source" value="source" />
          Source
        </label>
        <label class="radio">
          <input type="radio" v-model="colorMode" id="target" value="target" />
          Target
        </label>
        <label class="radio">
          <input
            type="radio"
            v-model="colorMode"
            id="gradient"
            value="gradient"
          />
          Gradient
        </label>
        <label class="radio">
          <input type="radio" v-model="colorMode" id="none" value="none" />
          None
        </label>
      </div>
      </div>
      </div>
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
  height: 100%;  /* Full viewport height */
}

.toolbar {
  background-color: #fefbfa;
  width: 90%;
  max-width: 500px;  /* Optional, max-width to avoid an overly wide toolbar */
  border-radius: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.20);
  
}

.colormode {
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  flex-
}

.radio {
  font-size: 0.7rem;
  text-align: center;
  
}

.input {
  border-radius: 0.5rem;
  border-color: #f5bea3;
  border-width: 0.15rem;
  border-style:solid;
  background-color: #fffcfa;
  padding: 0.1rem;
  margin: 0;
  margin-top: 1rem;
  text-align: center;
  width: 50%;
  
}

h2 {
  text-align: center;
  margin-bottom: 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.20);
  border-radius: 2rem;
  padding: 1rem;
  margin-top: 0;
  font-size: 1rem;
  background-color: #df5020;
  color: white;
}

h3 {
  text-align: center;
  margin-bottom: 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.20);
  border-radius: 1rem;
  padding: 0.2rem;
  margin: 2rem;
  margin-top: 3rem;
  font-size: 0.9rem;
  background-color: #df5020;
  color: white;
}

.size {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.20);
  border-radius: 1rem;
  padding: 0.5rem;
  margin: 1.5rem;
  margin-top: -1.5rem;
  border-color: #f7ddd4;
  border-width: 0.25rem;
  border-style: solid;
}

.colors {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.20);
  border-radius: 2rem;
  padding: 1rem;
  margin: 0rem;
  margin-top: -1rem;
  border-color: #f7ddd4;
  border-width: 0.25rem;
  border-style: solid;
}

input[type=range] {
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  height: 10px;
  background: transparent;  /* Make it transparent, not gray */
  outline: none;
  padding: 10px 0; /* Added padding to make space for larger thumb */
}

/* Style for the thumb */
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: #f48e1b;
  cursor: pointer;
  margin-top: -5px;  /* New */
  border-radius: 2rem;
}

input[type=range]::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: #f48e1b;
  cursor: pointer;
  border-radius: 2rem;
}

/* Style for the track */
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  background: #edc2b7;
  border-radius: 0.2rem;
}

input[type=range]::-moz-range-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  background: #edc2b7;
}

label,
div {
  font-size: 0.8rem;
}

</style>