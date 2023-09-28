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
.outline {
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  max-width: 40rem;
  margin-bottom: 2rem;
  background-color: transparent;
  cursor: pointer;
  background: linear-gradient(to bottom, #df5020 0%, #df5020 30%, transparent 30%, transparent 100%);
}

.outline:hover {
  background-color: #DFB020;
  background-size: 100% 200%, 100% 40px; /* Set the size of the first gradient to be twice its height */
  background:
    linear-gradient(to bottom, #df5020 0%, #df5020 30%, transparent 30%, transparent 100%),
    repeating-linear-gradient(
      -45deg,
      #f7ddd4, 
      #f7ddd4 20px, 
      #fefbfa 20px, 
      #fefbfa 40px
    );
  animation: gradientAnimation 30s infinite linear;  /* Apply the animation */
}

.card {
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  max-width: 40rem;
  margin-bottom: 2rem;
  background-color: #df5020;
  background: 
    linear-gradient(to bottom, #df5020 0%, #df5020 35%, transparent 35%, transparent 100%),
    repeating-linear-gradient(
      -45deg,
      #f7ddd4, 
      #f7ddd4 10px, 
      #fefbfa 10px, 
      #fefbfa 20px
    );
  cursor: pointer;
  opacity: 25%;
  transition: 0.33s ease-out;
}

.card:hover {
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  max-width: 40rem;
  margin-bottom: 2rem;
  background-color: #df5020;
  background: 
    linear-gradient(to bottom, #df5020 0%, #df5020 35%, transparent 35%, transparent 100%),
    repeating-linear-gradient(
      -45deg,
      #f7ddd4, 
      #f7ddd4 10px, 
      #fefbfa 10px, 
      #fefbfa 20px
    );
    animation: gradientAnimation 30s infinite linear; 
  cursor: pointer;
  opacity: 50%;
  transition: 0.33s ease-out;
}

.active{
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  max-width: 40rem;
  margin-bottom: 2rem;
  background-color: #df5020;
  background-repeat: repeat;
  background: 
    linear-gradient(to bottom, #df5020 0%, #df5020 35%, transparent 35%, transparent 100%),
    repeating-linear-gradient(
      -45deg,
      #f7ddd4, 
      #f7ddd4 10px, 
      #fefbfa 10px, 
      #fefbfa 20px
    );
    animation: gradientAnimation 15s infinite linear; 
  cursor: default;
  transition: 0.33s ease-in
  
  
}
.active-file {
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  max-width: 40rem;
  margin-bottom: 2rem;
  background-repeat: repeat;
  background: 
    linear-gradient(to bottom, #df5020 0%, #df5020 30%, transparent 30%, transparent 100%),
    repeating-linear-gradient(
      -45deg,
      #f7ddd4, 
      #f7ddd4 10px, 
      #fefbfa 10px, 
      #fefbfa 20px
    );
    animation: gradientAnimation 30s infinite linear; 
}





@keyframes gradientAnimation {
  0% {
    background-size: 100% 100%, 100% 100%;
  }
  100% {
    background-size: 100% 100%, 500% 500%;

  }
}





</style>
