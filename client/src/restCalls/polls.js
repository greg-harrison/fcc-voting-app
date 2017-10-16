import axios from 'axios'

const API_URL = process.env.VOTE_API_URL
const POLL_URL = API_URL + '/poll'

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
  }

}
