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
          <router-link to="/saved">Saved</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 90%;
  height: 4rem;
  background-color: #ec3705;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #ea8e74;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 2px solid #ea8e74;
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
  width: 90%;
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
</style>