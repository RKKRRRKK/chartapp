<template>
  <div class="sections">
      <side-bar class="sidebar"></side-bar>
      <viz-pane v-if="!vizSelected" class="vizpane"> </viz-pane>
      <sankey v-else></sankey>
      <sheet-manager class="sheetmanager"> </sheet-manager>
  </div>
</template>

<script>
import SideBar from './SideBar.vue';
import VizPane from './VizPane.vue';
import SheetManager from './SheetManager.vue';
import Sankey from './charts/Sankey.vue';

export default {
  components: {
    SideBar,
    VizPane,
    SheetManager,
    Sankey,
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
  background-color:#ea9a84;
}
</style>
