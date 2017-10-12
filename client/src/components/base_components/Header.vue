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
            {{ user.name || 'User' }}
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav mr-auto">
        <li v-if="!user.isLoggedIn" class="nav-item">
          <a href="#" v-on:click="login">
            Login
          </a>
        </li>
        <li v-if="user.isLoggedIn" class="nav-item">
          <a href="#" v-on:click="logout">
            Logout
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import auth from '../../auth/'

export default {
  name: 'header',
  data() {
    return {
      currentRoute: this.$route.fullPath,
      user: {
        name: null,
        isLoggedIn: auth.user.authenticated
      },
    }
  },
  methods: {
    login: function() {
      console.log('test')
    },
    logout: function() {
      auth.logout('/')
    }
  },
  mounted() {
    // Check user status
  }
}
</script>

<style scoped lang="scss">
@import '../../style/_variables.scss';

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
    color: $cream!important;
  }
}
</style>
