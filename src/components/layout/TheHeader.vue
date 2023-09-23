<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">Foxviz</router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/chart">Chart</router-link>
        </li>
        <li>
          <router-link to="/saved" @click="getFiles()">Saved</router-link>
        </li>
      </ul>
    </nav>
    <div class="login">
      <div class="logo">
        <router-link to="/auth">Click</router-link>
      </div>
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
  height: 4rem;
  background-color: #df5020;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #ea8e74;
  display: inline-block;
  padding: 0.5rem 1.5rem;
}

a:active,
a:hover,
a.router-link-active {
  border-bottom: 2.5px solid #ea8e74;
  color: #DFB020;
  border-color: #DFB020;
  font-weight:bolder;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
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
    height: 4rem;
}

.logo {
    background-color: #DFB020;
    width: 3rem;
    height:3rem;
    position: absolute;
    right: 0px;
    margin-right: 1rem;
    margin-top: 0.25rem;
    text-align: center;
    padding-top: 12px;
    border-radius: 50%;
}
</style>