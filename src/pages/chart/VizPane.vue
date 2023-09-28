<template>
  <div class="container">
    <viz-panel
      v-for="graph in graphs"
      :key="graph.id"
      :class="`graph${graph.id}`"
      :mode="`finished${graph.id}`"
      @click="graph.id === 1 ? toggleSelected(graph.id) : null"
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
  padding: 15rem;
  padding-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-evenly;
  align-content: stretch;
  gap: 5rem;
  height: 100%;

}

.graph1,
.graph2,
.graph3,
.graph4 {
  height: 30rem;
  width: 40rem;
  flex: 1 1  calc(50% - 5rem);; 
}
</style>
