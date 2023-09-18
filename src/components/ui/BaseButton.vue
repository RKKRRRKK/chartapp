<template>
    <button v-if="!link" :class="mode"  @click="toggleClick($event)">
        <slot></slot>
    </button>
    <router-link v-else :class="mode" :to="to" @click="toggleClick($event)">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: {
        mode:{
            type: String,
            required: false,
            default: null,
        },
        link: {
            type: Boolean,
            required: false,
            default: false
        },
        to: {
            type: String,
            required: false,
            default: '/'
        }
    },

    methods: {
      toggleClick(event) {
      const element = event.target;
      element.classList.add('clicked');
      
      setTimeout(() => {
        element.classList.remove('clicked');
      }, 200);
    }
    }
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.5rem 1rem;
  font: inherit;
  background-color: #ec3705;
  border: 1px solid #ec3705;
  color: white;
  cursor: pointer;
  border-radius: 2rem;
  margin-right: 0.5rem;
  display: inline-block;
}

.animate-click {
  text-decoration: none;
  padding: 0.5rem 1rem;
  font: inherit;
  background-color: #f48e1b;
  border: 1px solid #f48e1b;
  color: black;
  cursor: pointer;
  border-radius: 2rem;
  margin-right: 0.5rem;
  display: inline-block;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.20);
}

a:hover,
a:active,
button:hover,
button:active,
.animate-click:active {
  background-color: #ff9e02;
  border-color: #ff9e02;
}

.flat {
  background-color: transparent;
  color: #ec3705;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #ec3705;
  color: #ec3705;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #f0d0c9;
}

.animate-click.clicked {
  background-color:#f5b753;
  border-color:#df481f;
  transition: background-color 0.1s ease-out, border-color 0.1s ease-out;
}
</style>