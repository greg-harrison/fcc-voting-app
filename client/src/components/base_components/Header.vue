<template>
  <nav class="navbar w-100">
    Hello World
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

<style scoped>
h1,
h2 {
  font-weight: normal;
}

.navbar {
  background-color: teal;
  color: white;
  font-weight: bold;
}
</style>
