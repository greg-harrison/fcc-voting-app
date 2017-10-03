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
        <form>
          <label class="d-block">
            Email:
            <input v-model="credentials.email" placeholder="email">
          </label>
          <label class="d-block">
            Password:
            <input v-model="credentials.pass" placeholder="password" type="password">
          </label>
          <p v-if="error" class="error">
            {{ error }}
          </p>
        </form>
      </div>
      <div class="card-footer">
        <button class="btn btn-main" @click.prevent="login()" type="submit">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import auth from '../../auth/'

export default {
  name: 'login',
  data: () => ({
    credentials: {
      email: '',
      pass: ''
    },
    error: ''
  }),
  methods: {
    login() {
      let credentials = {
        email: this.credentials.email,
        pass: this.credentials.pass
      }

      auth.login(this, credentials)
    },
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
