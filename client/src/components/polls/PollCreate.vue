<template>
  <div class="poll create container p-0">
    <div class="card">
      <div class="card-header">
        Hello
      </div>
      <div class="card-body">
        <form>
          <label class="d-block">
            <input v-model="credentials.question" placeholder="question">
          </label>
        </form>
        <p v-if="error" class="error">
          {{ error }}, please try again
        </p>
      </div>
      <div class="card-footer">
        <button class="btn btn-main" @click.prevent="login()" type="submit">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    polls: {}
  }),
  methods: {
    // loadData: function() {
    //   const vm = this
    //   axios.get(process.env.VOTE_API_URL + '/user/1').then(
    //     res => {
    //       vm.user = res.data[0]
    //     })
    //     .catch((error) => {
    //       console.log('error', error);
    //     })
    // },
    testClick() {
      console.log('click from parent');
    }
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

<style lang="sass" scoped>

</style>
