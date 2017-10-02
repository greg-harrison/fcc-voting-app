<template class="testing">
  <div class="auth-card signup container p-0">
    <div class="card">
      <div class="card-header">
        <h2>Sign Up</h2>
      </div>
      <div class="card-body">
        <p class="intro-text" v-if="$route.query.redirect">
          You need to sign up first.
        </p>
        <form>
          <label class="d-block">
            Email:
            <input v-model="userForm.email" placeholder="email">
          </label>
          <label class="d-block">
            Name:
            <input v-model="userForm.name" placeholder="name">
          </label>
          <label class="d-block">
            Password:
            <input v-model="userForm.pass" placeholder="password" type="password">
          </label>
          <p v-if="error" class="error">Bad login information</p>
        </form>
      </div>
      <div class="card-footer">
        <button class="btn btn-main" @click.prevent="signup()" type="submit">Signup</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'signup',
  data: () => ({
    userForm: {
      name: '',
      email: '',
      password: ''
    },
    error: ''
  }),
  methods: {
    signup: function() {
      const _this = this
      axios.post(process.env.VOTE_API_URL + '/user/create', {
        name: _this.userForm.name,
        email: _this.userForm.email,
        password: _this.userForm.password
      })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
          _this.error = error
        });
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
