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
  padding: 0.5rem 1rem;
  font: inherit;
  background-color: #ec3705;
  border: 1px solid #ec3705;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #ec3705;
  border-color: #ec3705;
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
</style>