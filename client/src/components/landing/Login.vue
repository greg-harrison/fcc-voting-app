<template>
  <div class="auth-card login container p-0">
    <div class="card">
      <div class="card-header">
        <router-link to="/" exact tag="h2">
          Voute
        </router-link>
      </div>
      <div class="card-body">
        <form>
          <label class="d-block">
            <input :change="this.onEmail" v-model="user.email" placeholder="email">
          </label>
          <label class="d-block">
            <input :change="this.onPassword" v-model="user.pass" placeholder="password" type="password">
          </label>
          <span>{{user.passError}}</span>
          <div v-if="!!user.passError">TIBBY</div>
        </form>
        <p v-if="error" class="error">
          {{ error }}, please try again
        </p>
        <small>
          <router-link to="signup" class="auth-link">
            Don't have an account?
          </router-link>
        </small>
      </div>
      <div class="card-footer">
        <button class="btn btn-main" @click.prevent="login()" type="submit">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import auth from "../../auth/";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "login",
  data: () => ({
    error: ""
  }),
  methods: {
    login() {
      let credentials = {
        email: this.credentials.email,
        pass: this.credentials.pass
      };

      auth.login(this, credentials, "/");
      // GO TO LANDING
    },
    onEmail(e) {
      const value = e.target.value;
      this.$emit('input', value)
      this.userInputEmail(value)
    },
    onPassword(e) {
      const value = e.target.value || '';
      this.$emit('input', value)
      this.userInputPassword(value)
    },
    ...mapActions(["userInputEmail", "userInputPassword"])
  },
  computed: mapGetters({
    user: "user"
  }),
  created() {
    this.$store.dispatch("getUser");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
@import "../../style/_variables.scss";
@import "../../style/reusable-component-styles/main-button.scss";
@import "../../style/reusable-component-styles/auth-card.scss";

.login {
  .error {
    color: red;
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
