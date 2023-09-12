<template>
  <div class="container">
    <base-card class="graph1" mode="outline" @click="toggleSelected"></base-card>
    <base-card class="graph2" mode="outline" @click="toggleSelected"></base-card>
    <base-card class="graph3" mode="outline" @click="toggleSelected"></base-card>
    <base-card class="graph4" mode="outline" @click="toggleSelected"></base-card>
  </div>
</template>

<script>
import BaseCard from '../../components/ui/BaseCard.vue';
export default {
  components: {
    BaseCard,
  },
    props: ['id','name'],

    methods: {
    toggleSelected() {
        vizSelected = True
        
    }
}
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
