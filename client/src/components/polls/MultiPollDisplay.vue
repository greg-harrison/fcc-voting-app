<template>
  <div class="multi-poll container p-0">
    {{ polls }}
  </div>
</template>

<script>
import axios from 'axios'
import MainButton from '../reusable_components/main-button.vue'

export default {
  data: () => ({
    polls: {}
  }),
  components: {
    MainButton
  },
  methods: {
    loadData: function() {
      const vm = this

      console.log(process.env.VOTE_API_URL)
      console.log('hello world')
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
.multi-poll {
  margin-top: 3rem;
  text-align: center;
}
</style>
