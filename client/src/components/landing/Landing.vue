<template>
  <div class="landing container p-0">
    <h1>{{ msg }}</h1>
    <h2>{{ results.data }}</h2>
    <button @click="login">TEST</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'landing',
  data: () => ({
    msg: 'Welcome to Voute',
    results: []
  }),
  methods: {
    loadData: function() {
      const vm = this
      axios.get(process.env.VOTE_API_URL).then(
        response => {
          vm.results = response
        })
        .catch((error) => {
          // console.log('error', error);
        })
    },
  },
  // mounted() {
  //   this.loadData()
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../style/_variables.scss';
.landing {
  margin-top: 3rem;
  text-align: center;
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
