<template>
  <div class="rightsidebar">
    <div class="sheets">
      <ul v-if="hasSheets">
        <sheet-tile
          v-for="sheet in Sheets"
          :key="sheet.id"
          :id="sheet.id"
          :name="sheet.name"
          :date="sheet.date"
          :active-sheet-id="getActiveId"
          @delete-file="deleteSheet"
        ></sheet-tile>
      </ul>
      <base-button class="error" @click="createNewSheet" v-else
        >Create New Sheet</base-button
      >
      <h4 v-if="hasSheets" class="add" @click="createNewSheet">+</h4>
    </div>
  </div>
</template>

<script>
import SheetTile from '../../components/files/SheetTile.vue';
export default {
  components: {
    SheetTile,
  },
  computed: {
    Sheets() {
      return this.$store.getters['sheets/sheets'];
    },
    hasSheets() {
      return this.$store.getters['sheets/hasSheets'];
    },
    getName() {
      return this.$store.getters['sheets/getName'];
    },
    getActiveId() {
      return this.$store.getters['sheets/getActive'];
      //this returns the active sheet's id
    },
  },
  methods: {
    createNewSheet() {
      const Name = this.getName;
      const digits = Name.match(/\d+/g); // Extract digits from the string
      let newNumber = 0; // Default number

      if (digits && digits.length > 0) {
        const lastNumber = parseInt(digits[digits.length - 1], 10);
        newNumber = lastNumber + 1; // Increment by 1
      }

      const newName = `New Sheet ${newNumber}`; // Construct new name

      const newSheet = {
        id:
          Date.now().toString() +
          Math.floor(Math.random() * 10000)
            .toString()
            .padStart(4, '0'),
        name: newName,
        date: new Date().toISOString(),
        active: null,
        state: null, //name of chart if clicked
        inputLoading: null,
        inputData: [], //saved chart data
        save: null, //true or false, checks if sheet was saved
        settings: {
          nodePadding: 80,
          nodeWidth: 10,
          colors: ['#BBD8B3', '#F3B61F', '#A29F15', '#510D0A'],
          colorMode: 'none', //source,target,gradient,none
          fontSize: null, //fontsize of label
          numberColors: null,
          baseColor: [0,100,50],
        },
      };
      this.$store.commit('sheets/addSheet', newSheet);
      this.$store.commit('sheets/toggleActive', { id: newSheet.id });

      this.$store.commit('graphs/toggleDeselect');
    },

    deleteSheet(id) {
      this.$store.commit('sheets/deleteSheet', id);
    },
  },
};
</script>

<style scoped>
.error {
  margin: 1rem;
  font-size: 1rem;
}

.rightsidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #fefbfa;
  align-items: flex-start;
}
.sheets {
  margin-top: 1rem;
  background-color: #fefbfa;
  min-height: 15%;
  width: 90%;
  border-radius: 25px;
  border-color: #f7ddd4;
  border-width: 0.25rem;
  border-style: solid;
  display: flex;
  flex-direction: column;
  align-items: center;
}

ul {
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 90%;
}

.add {
  margin-top: -2.5rem;
  font-size: 2rem;
  color: #df5020;
  cursor: pointer;
  scale: 1.2
}

.add:hover,
.add:active,
.add:focus {
  color: #DFB020;
}
</style>

