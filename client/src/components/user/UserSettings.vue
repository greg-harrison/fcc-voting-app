<template>
  <div class="user_settings container p-0">
    <h1>Hello {{user.name}}</h1>
    <p>{{user.email}}</p>
    <router-link to="user/polls">
      Go To My Polls
    </router-link>
  </div>
</template>

<script>
import axios from 'axios'
import auth from '../../auth/'

export default {
  data: () => ({
    user: {
      name: auth.user.user_detail.name,
      email: auth.user.user_detail.email
    }
  }),
  methods: {
  },

  beforeCreate() {
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
