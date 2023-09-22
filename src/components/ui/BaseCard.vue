<template>
  <div :class="mode">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      required: false,
      default: null,
    },
  },

  mounted() {
    //console.log('Base-card Component Mounted Mode:', this.mode);
  },
  watch: {
    mode(newVal) {
     console.log('Base-card Component Updated Mode:', newVal);
    },
  },
};
</script>

<style scoped>
.outline {
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  max-width: 40rem;
  margin-bottom: 2rem;
  background-color: transparent;
  cursor: pointer;
}

.outline:hover {
  background-color: rgb(239, 136, 98);
}

.card {
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  max-width: 40rem;
  margin-bottom: 2rem;
  background-color: rgb(237, 113, 4);
  cursor: pointer;
}

.card:hover {
  background-color: rgb(239, 136, 98);
}

.active,
.active-file {
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  max-width: 40rem;
  margin-bottom: 2rem;
  background-color: rgb(237, 171, 66);
}





</style>
