<template>
  <div class="container">
    <viz-panel
      v-for="graph in graphs"
      :key="graph.id"
      :class="`graph${graph.id}`"
      :mode="`finished${graph.id}`"
      @click="toggleSelected(graph.id)"
    ></viz-panel>
  </div>
</template>

<script>
import VizPanel from './VizPanels/VizPanel.vue';
export default {
  components: {
    VizPanel,
  },
  computed: {
    graphs() {
      return this.$store.getters['graphs/graphs'];
    },
  },
  methods: {
    toggleSelected(id) {
      this.$store.commit('graphs/toggleSelected', { id });
    //  console.log('type of selected (vizpane):' + typeof id + ': ' + id);
      this.$store.commit('sheets/assignChart', id);
    },
  },
};
</script>

<style scoped>
.container {
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: flex-start;
}

.graph1,
.graph2,
.graph3,
.graph4 {
  height: 40%;
  width: 40%;
}
</style>
