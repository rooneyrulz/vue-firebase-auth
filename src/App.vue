<template>
  <div id="app">
    <div id="nav">
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/">Login</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="app-main">
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.app-main {
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
}
</style>
