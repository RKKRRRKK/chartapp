<template>
  <base-card :mode="card"  @click="toggleActive">
    <li>
      <h4>{{ name }}</h4>
      <h5>{{ '(' + date + ')' }}</h5>
      <div class="actions">
        <base-button @click="hydrateSheet" mode="outline" link to="/chart"
          >create a sheet</base-button
        >
        <base-button mode="outline" link to="/saved">edit</base-button>
        <base-button mode="outline" link :to="iframePath">i-frame</base-button>
        <base-button link to="/saved">delete</base-button>
      </div>
    </li>
  </base-card>
</template>

<script>
export default {
  props: ['id', 'name', 'date'],
  computed: {
    iframePath() {
      return '/saved/' + this.id + '/frame';
    },
    card() {
        console.log("is this being propagated? FileTile.vue")
      const activeFileId = this.$store.getters['files/getActive'];
      const card = this.id === activeFileId ? 'active-file' : 'outline';
      console.log("this.id: ", this.id)
      console.log("this.id: ", activeFileId)
      return card;
    },
  },
  methods: {
    hydrateSheet() {
      const file = this.$store.getters['files/getActiveFile'];
      const newSheet = {
        id: file.id,
        name: file.name,
        date: file.date,
        active: null,
        state: null, //name of chart if clicked
        inputLoading: null,
        inputData: file.inputData, //saved chart data
        save: true, //true or false, checks if sheet was saved
        settings: file.settings
      };

      this.$store.commit('sheets/addSheet', newSheet);
      this.$store.commit('sheets/toggleActive', { id: newSheet.id });
    },

    toggleActive() {
      this.$store.commit('files/toggleActive', { id: this.id })
      console.log("click: id:", this.id);
    },
    deleteFile() {
      this.$emit('delete-file', this.id);
    },
  },
};
</script>

<style scoped>
li {
  list-style-type: none;
  width: 100%;
}
h4 {
  text-align: left;
  margin: 0;
  font-size: 1rem;
}

h5 {
  margin-bottom: 1rem;
  margin-top: 0.1rem;
  font-size: 0.6rem;
  text-align: left;
}

.actions {
  font-size: 0.6rem;
}

div {
  text-align: right;
}
</style>
