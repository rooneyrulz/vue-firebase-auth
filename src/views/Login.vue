/* eslint-disable */
<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="onLogin">
      <input
        class="input-email"
        type="email"
        placeholder="Email"
        v-model="email"
      />
      <br />
      <input
        class="input-password"
        type="password"
        placeholder="Password"
        v-model="password"
      />
      <br />
      <button class="btn-login" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import firebase from '../config/firebase.config';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async onLogin() {
      try {
        const res = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        console.log(res);

        this.$router.replace({ name: 'Dashboard' });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="css" scoped>
/* .register {
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
} */

.input-email {
  min-width: 300px;
  min-height: 50px;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.input-password {
  min-width: 300px;
  min-height: 50px;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.btn-login {
  min-width: 300px;
  min-height: 40px;
  font-size: 1.2rem;
  color: #fff;
  background: rgb(71, 71, 122);

  /* margin-bottom: 1rem; */
}
</style>
