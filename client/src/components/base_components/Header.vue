<template>
  <nav class="navbar navbar-toggleable-md">
    <a href="#" class="navbar-brand">
      Voute
    </a>
  </nav>
</template>

<script>
import axios from 'axios'

export default {
  name: 'header',
  data() {
    return {
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
  .navbar-brand {
    color: $cream;
  }
}
</style>
