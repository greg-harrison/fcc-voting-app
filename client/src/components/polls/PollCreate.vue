<template>
  <div class="poll create container p-0">
    <div class="card">
      <div class="card-header">
        Create
      </div>
      <div class="card-body">
        <form>
          <label class="d-block">
            <input v-model="poll.question" placeholder="question">
          </label>
          <div>
            Options
            <div v-for="input in poll.inputs">
              <label class="d-block">
                <input v-model="input.option" placeholder="option value">
                <strong @click.prevent="removeOption()">X</strong>
              </label>
            </div>
            <button @click.prevent="addOption()">Add Option</button>
          </div>
        </form>
        <p v-if="error" class="error">
          {{ error }}, please try again
        </p>
      </div>
      <div class="card-footer">
        <button class="btn btn-main" @click.prevent="create()" type="submit">Create</button>
      </div>
    </div>
  </div>
</template>

<script>
// Awesome! This type of import works for Lodash!
import { isEmpty } from 'lodash'

export default {
  data: () => ({
    poll: {
      inputs: [
        {
          option: ''
        }
      ]
    }
  }),
  methods: {
    // This was only a test, obviously this will require maps, filters, and Object.assign to work correctly
    addOption() {
      // Pushes another input field into the array
      this.poll.inputs.push('')
    },
    removeOption() {
      // Removes the input field and it's input value from the item array
      this.poll.inputs.pop('')
    },
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
