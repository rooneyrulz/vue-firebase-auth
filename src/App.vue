<template>
  <div id="app">
    <div id="nav">
      <router-link v-if="isLoggedIn" to="/dashboard">Dashboard</router-link>
      <router-link v-if="isLoggedIn" to="/about">About</router-link>
      <router-link v-if="!isLoggedIn" to="/register">Register</router-link>
      <router-link v-if="!isLoggedIn" to="/">Login</router-link>
    </div>
    <Logout v-if="isLoggedIn" />
    <div class="app-main">
      <router-view />
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import firebase from './config/firebase.config';
import Logout from './components/Logout';

export default {
  name: 'App',
  async created() {
    await firebase
      .auth()
      .onAuthStateChanged((user) => (this.isLoggedIn = !!user));
  },
  data() {
    return {
      isLoggedIn: false,
    };
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Logout,
  },
};
</script>

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
  padding: 10px;
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
