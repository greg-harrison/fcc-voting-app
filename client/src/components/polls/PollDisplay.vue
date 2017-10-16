<template>
  <div class="poll display container p-0">
    <div class="card">
      <div class="card-header">
        Hello Poll
      </div>
      <div class="card-body">
        {{ poll }}
        <p v-if="error" class="error">
          {{ error }}, please try again
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import poll from '../../restCalls/polls'

export default {
  data: () => ({
    poll: {}
  }),
  methods: {
    getPoll() {
      let credentials = {
        poll_id: 1
      }

      poll.getPoll(this, credentials)
    },
  },

  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    this.getPoll()
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
