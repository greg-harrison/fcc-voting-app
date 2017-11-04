import axios from 'axios'
import auth from '../auth/'
import router from '../router'

const API_URL = process.env.VOTE_API_URL
const POLL_URL = API_URL + '/poll'
const USER_CREATED_POLL_LIST_URL = POLL_URL + '/list'
const USER_CREATE_POLL_URL = POLL_URL + '/create'

export default {

  getPoll(context, credentials, redirect) {
    const _this = context

    axios.get(
      POLL_URL + '/' + credentials.poll_id)
      .then(function (res) {
        _this.poll.question = res.data.data[0].question
        _this.poll.options = res.data.data
      })
      .catch(function (error) {
        _this.error = error.response.data.message
      });
  },

  getUserPolls(context, credentials, redirect) {
    const _this = context

    axios.get(
      USER_CREATED_POLL_LIST_URL + '/' + credentials.user_id)

      .then(function (res) {
        _this.user.polls = res.data.data
      })
      .catch(function (error) {
        _this.error = error.response.data.message
      });
  },

  createPoll(context, credentials, redirect) {
    const _this = context

    let body = credentials

    let config = {
      headers: auth.getAuthHeader()
    }

    axios.post(USER_CREATE_POLL_URL, body, config)
      .then(function (res) {
        router.push(redirect)
      })
      .catch(function (error) {
        _this.error = error.response.data.message
      });
  }

}
