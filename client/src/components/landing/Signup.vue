<template>
  <div class="auth-card signup container p-0">
    <div class="card">
      <div class="card-header">
        <router-link to="/" exact tag="h2">
          Voute
        </router-link>
      </div>
      <div class="card-body">
        <form>
          <label class="d-block">
            <input v-model="credentials.email" placeholder="email">
          </label>
          <label class="d-block">
            <input v-model="credentials.name" placeholder="name">
          </label>
          <label class="d-block">
            <input v-model="credentials.pass" placeholder="password" type="password">
          </label>
          <p v-if="error" class="error">Bad login information</p>
          <small>
            <router-link to="login" class="auth-link">
              Already have an account?
            </router-link>
          </small>
        </form>
      </div>
      <div class="card-footer">
        <button class="btn btn-main" @click.prevent="signup()" type="submit">Signup</button>
      </div>
    </div>
  </div>
</template>

<script>
import auth from '../../auth/'

export default {
  name: 'signup',
  data: () => ({
    credentials: {
      name: '',
      email: '',
      pass: ''
    },
    error: ''
  }),
  methods: {
    signup() {
      let credentials = {
        name: this.credentials.name,
        email: this.credentials.email,
        pass: this.credentials.pass,
      }

      auth.signup(this, credentials, '/')

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

.signup {
  .testing {
    background-color: blue;
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
