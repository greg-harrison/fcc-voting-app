<template>
  <div class="user_settings container p-0">
    <h1>Hello {{user.name}}</h1>
    <p>{{user.email}}</p>
    <main-button btn-text="Hello world" :onClick="testClick" btn-color="blue">
    </main-button>
    <main-button btn-text="Hello world" :onClick="testClick" btn-color="cream" text-color="black">
    </main-button>
  </div>
</template>

<script>
import axios from 'axios'
import MainButton from '../reusable_components/main-button.vue'

export default {
  data: () => ({
    user: {
      name: '',
      email: ''
    }
  }),
  components: {
    MainButton
  },
  methods: {
    loadData: function() {
      // Shouldn't use fat-arrow (=>) functions on methods
      //  it doesn't allow access to THIS, thus breaking data-binding
      const vm = this

      console.log('process.env.VOTE_API_URL', process.env.VOTE_API_URL);

      axios.get(process.env.VOTE_API_URL + '/user/1').then(
        res => {
          vm.user = res.data[0]
        })
        .catch((error) => {
          console.log('error', error);
        })
    },
    testClick() {
      console.log('click from parent');
    }
  },

  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
    this.loadData()
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeDestroy() {
    console.log('beforeDestroy')
  },
  destroyed() {
    console.log('destroyed')
  }
}
</script>

<style scoped lang="scss">
@import '../../style/_variables.scss';
.user_settings {
  margin-top: 3rem;
  text-align: center;
}
</style>
