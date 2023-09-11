<template>
  <div class="sections">
  <section>
    Sidebar
  </section>
  <section>
    Vizpane
  </section>
  <side-bar class="sidebar">
  </side-bar>
</div>

</template>


<script>
import SideBar from './SideBar.vue'

export default {
  components: {
    SideBar,
  }
};

</script>


<style scoped>
.sections {
  display: flex;
  background-size: 40px 40px;
  background-image:
    linear-gradient(to right, rgb(249, 201, 201) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(249, 201, 201) 1px, transparent 1px);
  justify-content: space-between;
}

.sidebar {
  align-self: flex-start;
}
</style>