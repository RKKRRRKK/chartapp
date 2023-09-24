<template>
  <div>
    <!-- Base Dialog Component -->
    <base-window
      :show="showDialog"
      @confirm-input="confirmSave"
      :inputValue="defaultName"
      title="Enter a name"
      @close="tryClose()"
    ></base-window>
    <base-card :mode="card" @click="toggleActive">
      <li>
        <div class="delname">
          <h4>{{ name }}</h4>
          <small-button class="delete" @click="deleteFile">X</small-button>
        </div>
        <div class="actions">
          <small-button
            mode="outline"
            @click="confirmName"
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
            :class="{ disabled: !isActive }"
            :disabled="!isActive"
            >tbd button</small-button
          >
        </div>
      </li>
    </base-card>
  </div>
</template>

<script>
export default {
  props: ['id', 'name', 'activeSheetId'],

  data() {
    return {
      showDialog: false,
      inputName: '',
    };
  },

  methods: {
    confirmSave(inputValue) {
    this.inputName = inputValue;
    this.save();
  },
    deleteFile() {
      this.$emit('delete-file', this.id);
    },
    toggleActive() {
      this.$store.commit('sheets/toggleActive', { id: this.id });
      // console.log('CHECK THIS ID' + this.id);
      this.$store.dispatch('sheets/checkAndUpdateSheetState');
    },
    tryClose() {
      this.showDialog = false;
    },
    confirmName() {
      const userId = this.$store.getters['userId'];
      if (userId) {
        this.showDialog = true;
      } else {
        console.log('not logged in');
      }
    },
    save() {
      const activeSheet = this.$store.getters['sheets/getActiveSheetFix'];
      const userId = this.$store.getters['userId'];
      if (userId) {
        console.log('save sheet: ', activeSheet, userId);
        this.$store.dispatch('sheets/saveSheet', {
          activeSheet: activeSheet,
          userId: userId,
          inputName: this.inputName,
        });
        this.showDialog = false;
      } else console.log('not logged in');
    },
  },
  computed: {
    card() {
      console.log('is this being propagated? SheetTile.vue');
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
  color: white;
}
.actions {
  font-size: 0.8rem;
  display: flex;
  justify-content: flex-end;
  margin-bottom: -0.7rem;
  gap: 0.5rem;
}

.delname {
  display: flex;
  margin-top: -0.5rem;
  margin-bottom: 0.5rem;
}
.delete {
  position: relative;
  margin: 0;
  margin-left: 4rem;
  margin-bottom: 1rem;
  margin-top: -0.4rem;
  text-align: center;
  text-justify: center;
  scale: 0.7;
}
</style>
