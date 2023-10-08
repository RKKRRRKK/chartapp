<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">Foxviz</router-link>
      </h1>
      <ul>
        <li>
          <router-link class="text-link" to="/chart">Chart</router-link>
        </li>
        <li>
          <router-link class="text-link" to="/saved" @click="getFiles()">Saved</router-link>
        </li>
      </ul>
    </nav>
    <div class="login">
      <div class="logo"  @click="toggleDropdown">
        <span class="material-symbols-outlined">account_circle</span>
      </div>
      <div v-if="showDropdown" class="dropdown">
        <router-link v-if="isLoggedIn" @click="logout" to="/login">Log-out</router-link>
        <router-link @click="toggleDropdown()" v-else to="/login">Log-in</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    }
  },
  data() {
    return {
      showDropdown: false
    };
  },
  methods: {

    getFiles() {
      const userId = this.$store.getters['userId'];
      if (userId) {
      this.$store.dispatch('sheets/fetchFiles')}
      },

    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },

    logout() {
      this.$store.dispatch('logout');
      this.showDropdown = false;
    }
  }
}
</script>



<style scoped>
header {
  width: 100vw;
  height: 4.5vh;
  background-color: #df5020;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #f7ddd4;
  display: inline-block;
  padding: 0.5rem 1.5rem;
}

a:active,
a:hover {
  border-bottom: 2.5px;
  color: #DFB020;
  border-color: #DFB020;
  font-weight:bolder;
}

header nav .router-link-active {
  border-bottom: 2.5px solid;
  color: #DFB020;
  border-color: #DFB020;
  font-weight: bolder;
}

.router-link-active {
  color: #DFB020;
  font-weight: bolder;
}

.text-link:hover {
  border-bottom: 2.5px solid;
  color: #DFB020;
  border-color: #DFB020;
  font-weight:bolder;
}
.text-link {
  color: #f7ddd4;
  font-weight:bolder;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}


header nav {
  width: 100vw;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}

.login {
    background-color: #df5020;
    width: 12vw;

}

.logo {
    width: 3rem;
    position: absolute;
    right: 0rem;
    top: 1rem;
}


.material-symbols-outlined {
  font-variation-settings:
  'FILL' 1,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24;
  color: #f7ddd4;
  border: none;
  scale: 2;
  cursor: pointer;
}

.material-symbols-outlined:hover {
  font-variation-settings:
  'FILL' 1,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24;
  color: #DFB020;
  border: none;
  
  }

  .logo.router-link-active .material-symbols-outlined {
  color: #DFB020;
}

.dropdown {
  position: absolute;
  right: 0;
  top: 4.5vh; 
  background-color: #df5020;
  border: 1px solid #f7ddd4;
  border-radius: 4px;
  z-index: 10;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

</style>