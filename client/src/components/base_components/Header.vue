<template>
  <nav class="navbar navbar-toggleable-md navbar-inverse">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCol">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-brand">
      <router-link to="/" exact>
        Voute
      </router-link>
    </div>
    <div class="navbar-collapse collapse" id="navbarCol">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/user" exact tag="a" class="nav-link">
            {{ user.name || 'User' | capitalize}}
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li v-if="!user.isLoggedIn" class="nav-item cursor">
          <router-link to="/login" exact tag="a" class="nav-link">
            Login
          </router-link>
        </li>
        <li v-if="user.isLoggedIn" class="nav-item cursor">
          <a v-on:click="logout" class="nav-link">
            Logout
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import auth from "../../auth/";
import { capitalize } from "../reusable_components/filters";

export default {
  name: "header",
  data() {
    return {
      currentRoute: this.$route.fullPath,
      user: {
        name: auth.user.user_detail.name,
        isLoggedIn: auth.user.authenticated
      }
    };
  },
  methods: {
    logout: function() {
      auth.logout("/");
    }
  },
  filters: {
    capitalize
  },
  mounted() {
    // Check user status
  }
};
</script>

<style scoped lang="scss">
@import "../../style/_variables.scss";

.navbar {
  background-color: $blue;
  a {
    color: $cream;
    text-decoration: none;
  }
  button.navbar-toggler {
    color: $cream;
  }
  .router-link-active {
    color: $cream !important;
  }
}
</style>
