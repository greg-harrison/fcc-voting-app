<template>
  <div>
    <h3>Hello world</h3>
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
