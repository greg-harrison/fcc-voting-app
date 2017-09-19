<template>
  <div class="user_settings container p-0">
    <h1>Hello world</h1>
    <p>{{user.name}}</p>
    <p>{{user.email}}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    user: {
    }
  }),
  methods: {
    loadData: () => {
      var config = {
        headers: {
          'Access-Control-Allow-Methods': 'GET,PUT,PATCH,POST,DELETE',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      }

      axios.get(process.env.API_URL + '/user/1', config).then(
        res => {
          console.log('res', res);
          this.user = res.data
        })
        .catch((error) => {
          console.log('error', error);
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        })
    }
  },

  beforeCreate() {
    console.log(process.env.API_URL)
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
    this.loadData()
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
}
</style>
