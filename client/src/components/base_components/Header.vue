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
    </div>
  </nav>
</template>

<script>
import axios from 'axios'

export default {
  name: 'header',
  data() {
    return {
      currentRoute: this.$route.fullPath,
      user: {
        name: null
      }
    }
  },
  mounted() {
    // Check user status
    console.log('mounted');
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
}
</style>
