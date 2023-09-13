<template>
  <div class="sections">
    <side-bar class="sidebar"></side-bar>
    <viz-pane v-show="!selectedGraph" class="vizpane"> </viz-pane>
    <sankey-chart v-show="selectedGraph ===1"></sankey-chart>
    <waterfall-chart v-show="selectedGraph === 2"></waterfall-chart>
    <other-chart v-show="selectedGraph === 3"></other-chart>
    <another-chart v-show="selectedGraph === 4"></another-chart>
    <sheet-manager class="sheetmanager"> </sheet-manager>
  </div>
</template>

<script>
import SideBar from './SideBar.vue';
import VizPane from './VizPane.vue';
import SheetManager from './SheetManager.vue';
import SankeyChart from './charts/SankeyChart.vue';
import WaterfallChart from './charts/WaterfallChart.vue';
import OtherChart from './charts/OtherChart.vue';
import AnotherChart from './charts/AnotherChart.vue';

export default {
  components: {
    SideBar,
    VizPane,
    SheetManager,
    SankeyChart,
    WaterfallChart,
    OtherChart,
    AnotherChart
  },
  computed: {
    selectedGraph() {
      return this.$store.getters['graphs/selectedGraphId'];
    },
  },
};
</script>

<style scoped>
.sections {
  display: flex;
  justify-content: space-between;
}

.vizpane {
  width: 100%;
}

.sheetmanager {
  width: 13.5vw;
}

.sidebar {
  width: 20vw;
  background-color: #ea9a84;
}
</style>
