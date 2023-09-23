<template>
    <button v-if="!link" :class="mode">
        <slot></slot>
    </button>
    <router-link v-else :class="mode" :to="to">
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
    }
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.2rem 0.5rem;
  font: inherit;
  background-color: #df5020;
  border: 1px solid #ffffff;
  color: white;
  cursor: pointer;
  display: flex;
  border-radius: 0.8rem;
  justify-content: space-between;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #ff9e02;
  border-color: #ff9e02;
  color:white;
}

.flat {
  background-color: transparent;
  color: #ec3705;
  border: none;
}

.outline {
  background-color: #df5020;
  border-color: #df5020;
  color: black;
  color: white;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
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
  opacity: 30%;
}

</style>