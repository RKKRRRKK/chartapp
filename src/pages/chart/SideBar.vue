<template>
  <the-right-sidebar>
    <FileTile
      v-for="file in fileTiles"
      :key="file.id"
      :id="file.id"
      :name="file.name"
      :date="file.date"
    >
    </FileTile>
  </the-right-sidebar>
</template>

<script>
import TheRightSidebar from '../../components/layout/TheRightSidebar.vue';
import FileTile from '../../components/files/FileTile.vue';

export default {
  components: {
    TheRightSidebar,
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
