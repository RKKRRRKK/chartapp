<template>
    <label class="radio-wrapper">
        <div class="radio-container">
            <input
                type="radio"
                :id="idradio"
                :name="name" 
                :value="valueradio"
                :checked="isChecked"
                @change="updateValue"
            />
            <span class="custom-radio"></span>
        </div>
        <div class="label-text">{{ nameradio }}</div>
    </label>
</template>

  <script>
  export default {
    props: ['idradio', 'valueradio', 'nameradio', 'value', 'name'],
    computed: {
      isChecked() {
        return this.value === this.valueradio;
      },
    },
    methods: {
      updateValue(event) {
        if (event.target.checked) {
        console.log("Emitting input event with value:", this.valueradio);
          this.$emit('input', this.valueradio);
        }
      },
    },
  };
  </script>
  

  <style scoped>

  /* Hide the default radio button */
  input[type="radio"] {
      display: none;
  }
  
  /* Center the custom radio and the text */
  .radio-wrapper {
      display: inline-block;
      text-align: center;
      margin-right: 0.6rem;
  }
  
  /* Adjust for the custom radio visual */
  input[type="radio"] + .custom-radio {
      display: inline-block;
      flex-wrap: wrap;
      width: 1rem;
      height: 1rem;
      border: 0.125rem solid #df5020;
      border-radius: 50%;
      vertical-align: middle;
      opacity: 50%
  }
  
  input[type="radio"]:checked + .custom-radio {
      background-color: #df5020;
      border-color: #df5020;
      opacity: 100%;
  }

  input[type="radio"]:hover + .custom-radio {
      background-color: #f7ddd4;
      border-color: #f7ddd4;
      opacity: 100%;
  }
  
  /* This container holds the radio button for center alignment */
  .radio-container {
      display: block;
  }
  
  /* The label text is in its own container below the radio */
  .label-text {
      display: block;
      margin-top: 5px; /* Adjust as necessary */
  }
  
  </style>