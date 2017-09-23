<template>
  <div class="auth-card login container p-0">
    <div class="card">
      <div class="card-header">
        <h2>Login</h2>
      </div>
      <div class="card-body">
        <p class="intro-text" v-if="$route.query.redirect">
          You need to login first.
        </p>
        <form @submit.prevent="login">
          <label class="d-block">
            Email:
            <input v-model="email" placeholder="email">
          </label>
          <label class="d-block">
            Password:
            <input v-model="pass" placeholder="password" type="password">
          </label>
          <p v-if="error" class="error">Bad login information</p>
        </form>
      </div>
      <div class="card-footer">
        <button class="btn btn-main" type="submit">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'login',
  data: () => ({
    results: []
  }),
  methods: {
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
@import '../../style/_variables.scss';
@import '../../style/reusable-component-styles/main-button.scss';
@import '../../style/reusable-component-styles/auth-card.scss';

.login {
  form {
    text-align: right;
    width: 70%;
  }
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;

  li {
    display: inline-block;
    margin: 0 10px;
  }
}
</style>
