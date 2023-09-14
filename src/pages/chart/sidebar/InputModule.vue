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
        <base-button v-show="state" @click="upload">Upload</base-button>
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
  
  .input {
    background-color: #df481f;
    width: 80%;
    height: 5rem;
    margin: 2rem;
  }
  
  .toolbar {
    background-color: #df481f;
    width: 80%;
    height: 15rem;
    margin: 2rem;
  }
  </style>
  