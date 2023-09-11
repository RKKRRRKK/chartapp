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
  background-color: #ec3705;
  border: 1px solid #ec3705;
  color: white;
  cursor: pointer;
  display: flex;
  border-radius: 0.5rem;
  justify-content: space-between;
}

a:hover,
a:active,
button:hover,
button:active {
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
  border-color: #c56008;
  color: #c56008;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #f0d0c9;
}
</style>