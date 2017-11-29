import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: '',
      name: '',
      password: '',
      email: '',
      isRegistered: false,
      createdTotal: 0,
      createdPolls: [],
      respondedPolls: []
    },
    creatingPoll: {
      pollId: '',
      title: '',
      createdUserId: '',
      pollOptions: []
    },
    response: {
      pollId: '',
      pollOptionId: ''
    }
  },
  mutations: {
    getUser: (state, payload) => {
      const user = {
        user: payload
      }
      console.log(state)
      state.user.unshift(user);
    },
    updateEmail: (state, payload) => {
      const user = {
        user: {
          email: payload.email
        }
      }
      state.user.unshift(user);
    }
  },
  actions: {
    updateEmail({ context }) {
      console.log('context', context);
      this.commit('updateEmail')
    }
  },
  getters: {
    user: state => state.user
  }
})
