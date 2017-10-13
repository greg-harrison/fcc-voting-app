import router from '../router/'
import axios from 'axios'

const API_URL = process.env.VOTE_API_URL
const LOGIN_URL = API_URL + '/user/login'
const SIGNUP_URL = API_URL + '/user/create'

export default {

  user: {
    authenticated: false,
    user_detail: {}
  },

  parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
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
        auth.user.user_detail = res.data.user

        if (redirect) {
          router.push(redirect)
        }
      })
      .catch(function (error) {
        _this.error = error.response.data.message
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
        auth.user.user_detail = res.data.user

        if (redirect) {
          router.push(redirect)
        }
      })
      .catch(function (error) {
        _this.error = error.response.message
      });
  },

  logout(redirect) {
    let auth = this
    localStorage.removeItem('id_token')
    auth.user.authenticated = false
    auth.user.user_detail = {}

    if (redirect && !auth.user.authenticated) {
      router.push(redirect)
    }
  },

  checkAuth() {
    let jwt = localStorage.getItem('id_token')
    if (jwt) {
      this.user.authenticated = true
      this.user.user_detail = this.parseJwt(jwt)
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
