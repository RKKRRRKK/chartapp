<template>
  <base-card :mode="card" @click="toggleActive">
    <li>
      <h4>{{ name }}</h4>
      <div class="actions">
        <small-button
          mode="outline"
          @click="save"
          :class="{ disabled: !isUserLogged || !isDataInput || !isActive }"
          :disabled="!isUserLogged || !isDataInput || !isActive"
          :title="
            !isUserLogged
              ? 'Please log in'
              : !isDataInput
              ? 'Please input data first'
              : ''
          "
        >
          save
        </small-button>
        <small-button
          mode="outline"
          link
          to="/"
          :class="{ disabled: !isActive}"
          :disabled="!isActive"
          >tbd button</small-button
        >
        <small-button class="delete" @click="deleteFile">X</small-button>
      </div>
    </li>
  </base-card>
</template>

<script>
export default {
  props: ['id', 'name', 'activeSheetId'],

  methods: {
    deleteFile() {
      this.$emit('delete-file', this.id);
    },
    toggleActive() {
      this.$store.commit('sheets/toggleActive', { id: this.id });
      // console.log('CHECK THIS ID' + this.id);
      this.$store.dispatch('sheets/checkAndUpdateSheetState');
    },
    save() {
      const activeSheet = this.$store.getters['sheets/getActiveSheetFix'];
      const userId = this.$store.getters['userId'];
      if (userId) {
        console.log('save sheet: ', activeSheet, userId);
        this.$store.dispatch('sheets/saveSheet', {
          activeSheet: activeSheet,
          userId: userId,
        });
      } else console.log('not logged in');
    },
  },
  computed: {
    card() {
      console.log("is this being propagated? SheetTile.vue")
      const activeSheetId = this.$store.getters['sheets/getActive'];
      const card = this.id === activeSheetId ? 'active' : 'card';
      return card;
    },
    isUserLogged() {
      const userId = this.$store.getters['userId'];
      return !!userId;
    },

    isDataInput() {
      const input = this.$store.getters['sheets/getActiveInputData'];
      console.log('isDataInput: ', input);
      return input;
    },
    isActive() {
      return this.id === this.activeSheetId;
    },
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
