<template>
  <div class="sections">
    <side-bar class="sidebar"></side-bar>
    <viz-pane v-show="!selectedGraph" class="vizpane"> </viz-pane>

    <div class="charts" v-show="selectedGraph">
      <sankey-chart v-show="selectedGraph === 1"></sankey-chart>
      <waterfall-chart v-show="selectedGraph === 2"></waterfall-chart>
      <other-chart v-show="selectedGraph === 3"></other-chart>
      <another-chart v-show="selectedGraph === 4"></another-chart>
    </div>

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
    AnotherChart,
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
  height: 95.5vh;
}

.vizpane {
  width: 75vw;
}

.charts {
  width: 75vw;
  background-color: transparent;

}

.sheetmanager {
  width: 10.2vw;
  border-color: #f7ddd4;
  border-left-width: 0.4rem;
  border-left-style:solid;
  background: 
    repeating-linear-gradient(
      45deg,
      #ffffff, 
      #fdede7 1px, 
      #ffffff 3px, 
      #ffffff 8px
    );
}

.sidebar {
  width: 15vw;
  background-color: #fffcfa;
  background: 
    repeating-linear-gradient(
      45deg,
      #ffffff, 
      #fdede7 1px, 
      #ffffff 3px, 
      #ffffff 8px
    );
  border-color: #f7ddd4;
  border-right-width: 0.4rem;
  border-right-style:solid;

}
</style>
