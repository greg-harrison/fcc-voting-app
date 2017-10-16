import axios from 'axios'

const API_URL = process.env.VOTE_API_URL
const POLL_URL = API_URL + '/poll'
const USER_CREATED_POLL_LIST_URL = POLL_URL + '/list'

export default {

  getPoll(context, credentials, redirect) {
    const _this = context

    axios.get(
      POLL_URL + '/' + credentials.poll_id)
      .then(function (res) {
        console.log('res', res);
        _this.poll = res.data
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
        console.log('res', res);
        _this.user.polls = res.data.data
      })
      .catch(function (error) {
        _this.error = error.response.data.message
      });
  }

}
