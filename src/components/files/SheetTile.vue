<template>
  <base-card :mode="card" @click="toggleActive">
    <li>
      <h4>{{ name }}</h4>
      <div class="actions">
        <small-button mode="outline" link to="/saved">save</small-button>
        <small-button mode="outline" link to="/saved">^</small-button>
        <small-button class="delete" @click="deleteFile">X</small-button>
      </div>
    </li>
  </base-card>
</template>

<script>
export default {
    props: ['id','name'],

methods: {
    deleteFile() {
        this.$emit('delete-file', this.id);
    },
    toggleActive () {
        this.$store.commit('sheets/toggleActive', {id: this.id});
        console.log('CHECK THIS ID' + this.id);
        this.$store.dispatch('sheets/checkAndUpdateSheetState');
    }
},
computed: {
    card() {
    const activeSheetId = this.$store.getters['sheets/getActive']; // Using the modified getter
    const card = (this.id === activeSheetId) ? 'active' : 'card'; // Compare with own ID
    return card;
  }
},
  };


</script>

<style scoped>
li {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
h4 {
  text-align: center;
  margin: 0;
  padding-bottom: 0.5rem;
  font-size: 0.8rem;
}
.actions {
  font-size: 0.6rem;
  display: flex;
  justify-content: space-between;
}
</style>
