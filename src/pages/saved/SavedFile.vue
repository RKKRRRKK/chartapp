<template>
  <section>
    <ul v-if="hasFiles">
      <file-tile
        v-for="file in fileTiles"
        :key="file.id"
        :id="file.id"
        :name="file.name"
        :date="file.date"
      ></file-tile>
    </ul>
    <h3 v-else>No saved files.</h3>
  </section>
</template>

<script>
import FileTile from '../../components/files/FileTile.vue';
export default {
  components: {
    FileTile,
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
section {
  display: flex;
  justify-content: center;
  height: 100vh;
}

</style>