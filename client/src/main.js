// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import auth from './auth'
import 'babel-polyfill'

// Vue.use(BootstrapVue)

Vue.config.productionTip = false

const store = new Vuex.Store({
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
      commit('updateEmail')
    }
  },
  getters: {
    user: state => state.user
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  computed: {
    user: function () {
      return this.$store.getters.user
    }
  },
  components: { App },
  store: store
})
