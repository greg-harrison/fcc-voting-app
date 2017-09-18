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
      console.log('app', app);
      axios.get(process.env.API_URL + '/user/1')
        .then(
        res => {
          console.log('res', res);
          this.user = res.data
        })
        .catch((error) => {
          console.log('error', error);
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
