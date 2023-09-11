<template>
  <div class="sections">
      <side-bar class="sidebar"></side-bar>
      <viz-pane class="vizpane"> </viz-pane>
      <sheet-manager class="sheetmanager"> </sheet-manager>
  </div>
</template>

<script>
import SideBar from './SideBar.vue';
import VizPane from './VizPane.vue';
import SheetManager from './SheetManager.vue';

export default {
  components: {
    SideBar,
    VizPane,
    SheetManager,
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
