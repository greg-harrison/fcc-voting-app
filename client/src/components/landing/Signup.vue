<template>
  <div class="auth-card signup container p-0">
    <div class="card">
      <div class="card-header">
        <h2>Sign Up</h2>
      </div>
      <div class="card-body">
        <p class="intro-text" v-if="$route.query.redirect">
          You need to sign up first.
        </p>
        <form @submit.prevent="signup">
          <label><input v-model="email" placeholder="email"></label>
          <label><input v-model="name" placeholder="name"></label>
          <label><input v-model="pass" placeholder="password" type="password"></label> (hint: password1)<br>
          <p v-if="error" class="error">Bad login information</p>
        </form>
      </div>
      <div class="card-footer">
        <button class="btn btn-main" type="submit">Signup</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'signup',
  data: () => ({
    msg: 'login',
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
@import '../../style/reusable-component-styles/auth-card.scss';

.signup {
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
