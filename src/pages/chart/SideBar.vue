<template>
  <div class="rightsidebar">
    <div class="sheets">
      <ul v-if="hasFiles">
        <sheet-tile
          v-for="file in fileTiles"
          :key="file.id"
          :id="file.id"
          :name="file.name"
          :date="file.date"
        ></sheet-tile>
      </ul>
      <h3 v-else>No saved files.</h3>
      <h4 class="add">+</h4>
    </div>
  </div>
</template>

<script>
import SheetTile from '../../components/files/SheetTile.vue';
export default {
  components: {
    SheetTile,
  },
  computed: {
    fileTiles() {
      return this.$store.getters['files/files'];
    },
    hasFiles() {
      return this.$store.getters['files/hasFiles'];
    },
  },
};
</script>

<style scoped>
.rightsidebar {
  display: flex;
  align-items: center; 
  justify-content: center; 
  position: relative;
  background-color: #ea9a84;
  width: 10%;
  height: 100vh;
}
.sheets {
  background-color: #e06340;
  height: 98%;
  width: 90%;
  border-radius: 25px;
}

ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    width: 90%;
    margin-left: 0.5rem;
}

.add {
    text-align: center;
    margin-top: -2.5rem;
    font-size: 2rem;
    color: #bf3813;
    cursor: pointer;
}

.add:hover,
.add:active,
.add:focus {
    color: #ff893a
}
</style>
