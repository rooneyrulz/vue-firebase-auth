/* eslint-disable */
<template>
  <span v-if="isLoggedIn" @click="onLogout" class="logout">Logout</span>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import firebase from '../config/firebase.config';

export default {
  name: 'Logout',
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
  methods: {
    async onLogout() {
      try {
        const res = await firebase.auth().signOut();
        console.log(res);

        this.$router.replace({ name: 'Login' });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="css" scoped>
.logout {
  cursor: pointer;
}
</style>
