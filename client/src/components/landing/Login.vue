<template>
  <div class="auth-card login container p-0">
    <div class="card">
      <div class="card-header">
        <router-link to="/" exact tag="h2">
          Voute
        </router-link>
      </div>
      <div class="card-body">
        <!-- <p class="intro-text" v-if="$route.query.redirect">
                                              You need to login first.
                                            </p> -->
        <form>
          <label class="d-block">
            <input @change="updateEmail(user.email)" v-model="user.email" placeholder="email">
          </label>
          <label class="d-block">
            <input v-model="user.pass" placeholder="password" type="password">
          </label>
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
import { mapActions } from "vuex";
import { store } from "../../main";

console.log("store", store);
console.log("mapActions", mapActions);

export default {
  name: "login",
  data: () => ({
    user: {
      email: this.user.email,
      pass: ""
    },
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
    updateEmail: function() {
      console.log("this.$store", this.$store);
      this.$store.commit("updateEmail", this.user.email);
    }
  },
  computed: {
    user: {
      get() {
        return this.$store.getters.user;
      },
      set(value) {
        this.$store.commit("updateEmail", value);
      }
    }
  },
  mounted() {}
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
