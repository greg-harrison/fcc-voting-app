import auth from '../../auth'
import * as types from '../mutation-types'

const defaultState = {
  user: {
    id: '',
    name: '',
    pass: '',
    passError: false,
    email: '',
    isRegistered: false,
    createdTotal: 0,
    createdPolls: [],
    respondedPolls: []
  },
}

const actions = {
  getUser: ({ commit }) => {
    console.log('getting user');
    commit(types.RECEIVE_USER, { user: auth.user.user_detail })
  },
  userInputEmail: ({ commit }, email) => {
    console.log('one more');
    commit(types.USER_INPUT_EMAIL, { text: email })
  },
  userInputPassword: ({ commit }, password) => {
    commit(types.USER_INPUT_PASSWORD, { text: password, error: false })
  }
}
const mutations = {
  [types.RECEIVE_USER](state, { user }) {
    state.user = user
  },

  [types.USER_INPUT_EMAIL](state, { text }) {
    state.user.email = text
  },

  [types.USER_INPUT_PASSWORD](state, { text, error }) {
    state.user.pass = text
    state.user.passError = error
  }
}
const getters = {
  user: state => state.user
}

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
}
