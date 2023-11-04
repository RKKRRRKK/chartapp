<template>
  <base-card :mode="card" @click="toggleActive">
    <li>
      <div class="delname">
        <h4>{{ name }}</h4>
        <base-button
          :class="{ disabled: !isActive }"
          :disabled="!isActive"
          mode="delete"
          class="delete"
          @click="deleteFile"
          link
          :to="isActive ? '/saved' : ''"
          >x</base-button
        >
      <base-dialog :show="confirmDelete" title="Warning: This action will permanently delete the file." @confirm="handleDelete" @close="confirmDelete = false"></base-dialog>
      </div>
      <h5>{{ '(' + formattedDate + ')' }}</h5>
      <div class="actions">
        <base-button
          @click="hydrateSheet"
          :class="{ disabled: !isActive }"
          :disabled="!isActive"
          mode="outline"
          link
          :to="isActive ? '/chart' : ''"
          >create a sheet</base-button
        >
        <base-button
          :class="{ disabled: !isActive }"
          :disabled="!isActive"
          mode="outline"
          link
          :to="isActive ? '/saved' : ''"
          >edit</base-button
        >
        <base-button
        @click="getFramed"
          :class="{ disabled: !isActive }"
          :disabled="!isActive"
          mode="outline"
          >i-frame</base-button
        >
      </div>
    </li>
  </base-card>
</template>
<script>
export default {


  data() {
  return {
    confirmDelete: false
  };
},

  props: ['id', 'name', 'date'],
  computed: {
    formattedDate() {
      const dateObj = new Date(this.date);
      const year = dateObj.getFullYear();
      const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // +1 because months are 0-indexed
      const day = String(dateObj.getDate()).padStart(2, '0');
      const hours = String(dateObj.getHours()).padStart(2, '0');
      const minutes = String(dateObj.getMinutes()).padStart(2, '0');
      return `${year}-${month}-${day} ${hours}:${minutes}`;
    },
    card() {
      console.log('is this being propagated? FileTile.vue');
      const activeFileId = this.$store.getters['files/getActive'];
      const card = this.id === activeFileId ? 'active-file' : 'outline';
      console.log('this.id: ', this.id);
      console.log('this.id: ', activeFileId);
      return card;
    },

    isActive() {
      const activeFileId = this.$store.getters['files/getActive'];
      return this.id == activeFileId;
    },

    getActive() {
      const activeFileId = this.$store.getters['files/getActive'];
      return activeFileId
    },

    isFramed() {
      const framedFileId = this.$store.getters['files/getFramedFileId'];
      return this.id == framedFileId;
    },

    getFrame() {
      const framedFileId = this.$store.getters['files/getFrame'];
      return framedFileId;
    },

    checkFrames() {
      console.log("checkframes triggered at FileTile.vue")
      const availFrame = this.$store.getters['iframes/checkFrames']
      console.log("checkframes", availFrame)
      return availFrame;
    }
  },
  methods: {
    hydrateSheet() {
    const file = this.$store.getters['files/getActiveFile'];
    console.log("1 ", this.id, " ", file.id)
    if (this.id === file.id) {
        const newSheet = {
            id: file.id,
            name: file.name,
            date: file.date,
            active: null,
            state: null, //name of chart if clicked
            inputLoading: null,
            inputData: file.inputData, //saved chart data
            save: true, //true or false, checks if sheet was saved
            settings: file.settings,
        };

        this.$store.commit('sheets/addSheet', newSheet);
        this.$store.commit('sheets/toggleActive', { id: newSheet.id });
    }
},

async getFramed() {
  console.log(`isActive: ${this.isActive}, isFramed: ${this.isFramed}`);

  if (this.isActive && this.isFramed) {
    console.log('Routing to frame...');
    try {
      await this.$router.push(`${this.getFrame}`);
    } catch (error) {
      console.error('Router navigation failed', error);
    }
  } else if (this.isActive && !this.isFramed) {
    if (this.checkFrames) {
      try {
        console.log('Assigning frame...');
        await this.$store.dispatch('files/assignFrame', { frame: this.checkFrames, fileID: this.getActive });
        console.log('assigned', this.checkFrames)
        await this.$store.dispatch('files/assignFileData', { frame: this.checkFrames, fileID: this.getActive });

        // Recheck isFramed after dispatching
        console.log(`Rechecking after dispatch: isFramed: ${this.isFramed}`);
        if (!this.isFramed) {
          console.log('Frame assignment seems to have failed, not rerunning getFramed.');
        }
        else if (this.isFramed) {
          await this.getFramed()
        }
      } catch (error) {
        console.error("An error occurred during the frame assignment.", error);
      }
    } else {
      console.log("No frame is available");
    }
  } else {
    console.log('Neither active nor framed conditions met.');
  }
},

toggleActive() {
    this.$store.commit('files/toggleActive', { id: this.id });
    console.log('click: id:', this.id);
},

handleDelete() {
  this.confirmDelete = false;
  this.$emit('delete-file', this.id);
},

deleteFile() {
    this.confirmDelete = true; 
},
},
}

</script>

<style scoped>
li {
  list-style-type: none;
  width: 100%;
}
h4 {
  text-align: left;
  margin: 0;
  font-size: 1.1rem;
  margin-top: -0.4rem;
  color: white;
}

h5 {
  margin-bottom: 1.5rem;
  margin-top: -1rem;
  font-size: 0.8rem;
  text-align: left;
}

.actions {
  font-size: 0.7rem;
}

div {
  text-align: right;
}

.delete {
  position: relative;
  padding: 0.1rem 0.5rem;
  margin: 0;
  margin-left: 20rem;
  margin-bottom: 1rem;
  text-align: center;
  text-justify: center;
  margin-top: -0.7rem;
  border-style: solid;
  border-width: 0.1rem;
  border-color: white;
}

.delname {
  display: flex;
  padding-bottom: 0.5rem;
  justify-content: space-between;
}
</style>
