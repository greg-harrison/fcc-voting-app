import router from '../router/'
import axios from 'axios'

const API_URL = process.env.VOTE_API_URL
const LOGIN_URL = API_URL + '/user/login'
const SIGNUP_URL = API_URL + '/user/create'

export default {

  user: {
    authenticated: false
  },

  login(context, credentials, redirect) {
    const _this = context
    let auth = this
    axios.post(
      LOGIN_URL,
      credentials)
      .then(function (res) {
        localStorage.setItem('id_token', res.data.token)
        auth.user.authenticated = true

        if (redirect) {
          router.go(redirect)
        }
      })
      .catch(function (error) {
        _this.error = error
      });
  },

  signup(context, credentials, redirect) {
    const _this = context
    let auth = this
    axios.post(
      SIGNUP_URL,
      credentials)
      .then(function (res) {
        localStorage.setItem('id_token', res.data.token)
        auth.user.authenticated = true

        if (redirect) {
          router.go(redirect)
        }
        console.log('this.user.authenticated', this.user.authenticated);
      })
      .catch(function (error) {
        _this.error = error
      });
  },

  logout() {
    let auth = this
    localStorage.removeItem('id_token')
    auth.user.authenticated = false
  },

  checkAuth() {
    let jwt = localStorage.getItem('id_token')
    if (jwt) {
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
    }
  },

  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
  },
}
