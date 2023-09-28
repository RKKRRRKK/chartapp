<template>
    <div :class="mode">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      mode: {
        required: false,
        default: null,
      },
    },
  
    mounted() {
      //console.log('Base-card Component Mounted Mode:', this.mode);
    },
    watch: {
      mode(newVal) {
       console.log('Base-card Component Updated Mode:', newVal);
      },
    },
    
  };
  </script>
  
  <style scoped>
  



  .finished2,
  .finished3,
  .finished4 {
  position: relative;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  max-width: 40rem;
  margin-bottom: 2rem;
  background-color: transparent;
  overflow: hidden;
}

.finished2::before,
.finished3::before,
.finished4::before {
  content: '';
  background-image: url('../../../../public/construction.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(0.8);
  opacity: 1;
}

.finished1::before {
  content: '';
  background-image: url('../../../../public/sankey.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(0.8);
  opacity: 0.7;
}

.finished1 {
  position: relative;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  max-width: 40rem;
  margin-bottom: 2rem;
  background-color: transparent;
  cursor: pointer;
  overflow: hidden;
  transition:0.2s ease-out
}


.finished1:hover {
    background-color:#f7ddd4;
    transition:0.2s ease-in
}

  
  
  
  
  </style>
  