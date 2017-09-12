<template>
  <div class="landing container p-0">
    <h1>{{ msg }}</h1>
    <h2>{{ results.data }}</h2>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'landing',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      results: []
    }
  },
  mounted() {
    axios.get('http://localhost:8081').then(response => {
      this.results = response
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
