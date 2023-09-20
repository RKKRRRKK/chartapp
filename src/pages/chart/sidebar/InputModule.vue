<template>
  <div class="container">
    <div class="input">
      <!-- File Input and Button -->
      <input
        style="display: none"
        type="file"
        ref="fileInput"
        @input="handleFileUpload"
      />
      <base-button class="button" v-show="state" @click="upload"
        >Upload</base-button
      >
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    state() {
      return this.$store.getters['sheets/getState'];
    },
  },

  methods: {
    handleFileUpload() {
      this.$store.dispatch('sheets/isLoading', true);
      console.log("handlefileupload triggered");
      const file = this.$refs.fileInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          // Parsing the CSV data
          const csvData = e.target.result;
          const lines = csvData.trim().split('\n');
          const result = [];

          for (let i = 1; i < lines.length; i++) {
            const currentline = lines[i].split(',');
            if (currentline.length >= 3) {
              const from = currentline[0];
              const to = currentline[1];
              const value = parseInt(currentline[2], 10);
              result.push([from, to, value]);
              this.$refs.fileInput.value = null;
            }
          }

          // Updating Vuex state
          this.$store.dispatch('sheets/updateInputData', result);
          const uniqueStrings = new Set();

          for (const subArr of result) {
            for (const item of subArr) {
              if (typeof item === 'string') {
                uniqueStrings.add(item);
              }
            }
          }

          this.$store.dispatch('sheets/updateNumberColors', uniqueStrings.size);
          console.log(uniqueStrings.size);
        };
        reader.readAsText(file);
      }
    },

    upload() {
      this.$refs.fileInput.click();
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.button {
  font-size: 25px;
  padding: 1rem;
  padding-left: 4rem;
  padding-right: 4rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.26);
  color: black;
  font-weight: bold;
}
</style>
