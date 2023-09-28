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
    <router-link class=logo to="/login">
        <span class="material-symbols-outlined">account_circle</span>
    </router-link>
</div>

  </header>
</template>

<script>
export default {

  methods: {
    getFiles() {
      const userId = this.$store.getters['userId'];
      if (userId) {
      this.$store.dispatch('sheets/fetchFiles')}
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
    right: 0px;
    margin-right: 2.5rem;
    margin-top: -1.2rem;
    scale: 2;
}


.material-symbols-outlined {
  font-variation-settings:
  'FILL' 1,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24;
  color: #f7ddd4;
  border: none;
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
  color: #DFB020; /* or any other styles you want to apply */
}

</style>