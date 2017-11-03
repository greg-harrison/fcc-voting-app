import axios from 'axios'
import auth from '../auth/'
import router from '../router'

const API_URL = process.env.VOTE_API_URL
const POLL_URL = API_URL + '/poll'

const USER_CREATE_RESPONSE_URL = POLL_URL + '/respond'

export default {
  createResponse(context, credentials, redirect) {
    const _this = context

    let body = credentials

    let config = {
      headers: auth.getAuthHeader()
    }

    console.log('body', body);

    axios.post(USER_CREATE_RESPONSE_URL, body, config)
      .then(function (res) {
        console.log('res', res);
        router.push(redirect)
      })
      .catch(function (error) {
        console.log('error', error);
        _this.error = error.response.data.message
      });
  }
}
