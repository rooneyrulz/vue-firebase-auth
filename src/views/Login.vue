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
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    onLogin() {
      console.log(this.email);
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
  min-height: 40px;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.input-password {
  min-width: 300px;
  min-height: 40px;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.btn-login {
  min-width: 300px;
  min-height: 40px;
  font-size: 1.3rem;
  color: #fff;
  background: rgb(71, 71, 122);

  /* margin-bottom: 1rem; */
}
</style>
