import auth from '../../auth'
import * as types from '../mutation-types'

const defaultState = {
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
}

const actions = {
  getUser: ({ commit }) => {
    commit(types.RECEIVE_USER, { user: auth.user.user_detail })
  },
  userInputEmail: ({ commit }, email) => {
    commit(types.USER_INPUT_EMAIL, { text: email })
  }
}
const mutations = {
  [types.RECEIVE_USER](state, { user }) {
    state.user = user
  },

  [types.USER_INPUT_EMAIL](state, { text }) {
    state.user.email = text
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
