<template>
    <button v-if="!link" :class="mode">
      <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
      <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
      mode: {
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
      },
      disabled: {
          type: Boolean,
          required: false,
          default: false
      }
  },

}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.5rem 1rem;
  font: inherit;
  background-color: #df5020;
  border: 1px solid #df5020;
  color: white;
  cursor: pointer;
  border-radius: 2rem;
  margin-right: 1rem;
}

.animate-click {
  text-decoration: none;
  padding: 0.5rem 1rem;
  font: inherit;
  background-color: #df5020;
  border: 1px solid #df5020;
  color: white;
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
  background-color: #DFB020;
  border-color: #DFB020;

}

.flat {
  background-color: transparent;
  color: #df5020;
  border: none;
}

.outline {
  background-color: #fefbfa;
  border-color: #df5020;
  color: #df5020;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #df5020;
  color: white;
  border-color: #df5020;
}

.animate-click.clicked {
  background-color:#f5b753;
  border-color:#f7ddd4;
  transition: background-color 0.1s ease-out, border-color 0.1s ease-out;
}

.delete {
  background-color: #df5020;
}

.delete:hover {
  background-color: #DFB020;
}

button.disabled,
a.disabled {
  cursor: default;
  opacity: 40%;
}

button.disabled:hover,
a.disabled:hover {
  color: #c56008;
  opacity: 0%;
}

</style>