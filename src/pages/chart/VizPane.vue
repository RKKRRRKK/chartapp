<template>
  <div class="container">
    <base-card
      v-for="graph in graphs"
      :key="graph.id"
      :class="`graph${graph.id}`"
      mode="outline"
      @click="toggleSelected(graph.id)"
    ></base-card>
  </div>
</template>

<script>
import BaseCard from '../../components/ui/BaseCard.vue';
export default {
  components: {
    BaseCard,
  },
  computed: {
    graphs() {
      return this.$store.getters['graphs/graphs'];
    },
  },
  methods: {
    toggleSelected(id) {
      this.$store.commit('graphs/toggleSelected', { id })
      console.log(id);
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
  background-size: 40px 40px;
  background-image: linear-gradient(
      to right,
      rgb(245, 235, 235) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgb(245, 235, 235) 1px, transparent 1px);
}

.graph1,
.graph2,
.graph3,
.graph4 {
  height: 40%;
  width: 40%;
}
</style>
