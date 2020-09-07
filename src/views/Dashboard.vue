<template>
  <div class="dashboard">
    <h2>Dashboard</h2>
    <br />
    <h3 v-if="isLoggedIn">{{ userEmail }}</h3>
  </div>
</template>

<script>
import firebase from '../config/firebase.config';

export default {
  name: 'Dashboard',
  data() {
    return {
      isLoggedIn: false,
      userEmail: null,
    };
  },
  async created() {
    const user = await firebase.auth().currentUser;
    if (user) {
      this.isLoggedIn = true;
      this.userEmail = user.email;
    }
  },
};
</script>

<style lang="scss" scoped></style>
