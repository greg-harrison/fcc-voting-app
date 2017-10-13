<template>
  <div class="landing container p-0">
    <h4>Choose a Path</h4>

    <div class="mt-5">
      <main-button class="main-button" :onClick="goToPollCreate" btn-text="Make a Poll" btn-color="green"></main-button>
      <main-button class="main-button" btn-text="Take a Poll" btn-color="purple"></main-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../../router'
import MainButton from '../reusable_components/main-button.vue'

export default {
  name: 'landing',
  data: () => ({
    results: []
  }),
  methods: {
    goToPollCreate: function() {
      // How to use this for both creating and editing.
      // I'm thinking that we make an API call that's like "initiate Poll" which sends the poll_id on the response
      // Once we have the poll_id, we redirect into it with that poll_id, making Editing and Creating essentially no different

      // BEFORE WE DO ALL OF THAT, we'll want to add Vuex, but that's for another time :D

      router.push('/poll/create')
    },
    loadData: function() {
      const vm = this
      // axios.get(process.env.VOTE_API_URL).then(
      //   response => {
      //     vm.results = response
      //   })
      //   .catch((error) => {
      //     // console.log('error', error);
      //   })
    },
  },
  components: {
    MainButton
  },
  mounted() {
    // this.loadData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../style/_variables.scss';
.landing {
  margin-top: 3rem;
  text-align: center;
  .main-button {
    padding: 1rem 3rem;
    font-size: 2rem;
    max-width: 252px;
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
