<template>
  <div class="user_settings container p-0">
    <h1>Hello {{user.name}}</h1>
    <p>{{user.email}}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    user: {
      name: '',
      email: ''
    }
  }),
  methods: {
    loadData: function() {
      // Shouldn't use fat-arrow (=>) functions on methods
      //  it doesn't allow access to THIS, thus breaking data-binding
      const vm = this

      axios.get(process.env.API_URL + '/user/1').then(
        res => {
          vm.user = res.data[0]
        })
        .catch((error) => {
          console.log('error', error);
        })
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
@import '../style/_variables.scss';
.user_settings {
  margin-top: 3rem;
  text-align: center;
}
</style>
