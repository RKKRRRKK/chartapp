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
  props: ['id', 'name', 'activeSheetId', 'userInput'],

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
        activeSheet['inputName'] = this.inputName
        console.log('save sheet: ', activeSheet, userId);
        this.$store.dispatch('sheets/saveSheet', {
          activeSheet: activeSheet,
          userId: userId,
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

.actions {
  font-size: 0.8rem;
  display: flex;
  justify-content: flex-end;
  margin-bottom: -0.7rem;
  gap: 0.5rem;
}

.delname {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2rem;
  margin-top: -1rem;
}

h4 {
  flex-shrink: 1; /* Allows the h4 to shrink */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* Optional, but will add '...' if the text is truncated */
  margin: 0;
  font-size: 0.8rem;
  color: white;
  max-width: calc(100% - 1rem); /* Assuming 1rem is the width of your button, adjust as necessary */
}

.delete {
  flex-shrink: 0;
  scale: 0.7 /* Prevents the button from shrinking */
  /* ...other styles */
}
</style>
