import axios from 'axios'
import auth from '../auth/'
import router from '../router'
import { map, mapValues, countBy, groupBy } from 'lodash'

const API_URL = process.env.VOTE_API_URL
const POLL_URL = API_URL + '/poll'
const USER_CREATED_POLL_LIST_URL = POLL_URL + '/list'
const USER_CREATE_POLL_URL = POLL_URL + '/create'
const USER_EDIT_POLL_URL = POLL_URL + '/update'
const USER_RESPONDED_POLLS_LIST_URL = POLL_URL + '/responses/list'
const POLL_RESPONSES_URL = POLL_URL + '/responses'

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

  getAllPollsList(context, redirect) {
    const _this = context

    axios.get(USER_CREATED_POLL_LIST_URL + '/all')
      .then(function (res) {
        _this.polls = res.data.data
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

  getUserRespondedPolls(context, credentials, redirect) {
    const _this = context

    axios.get(
      USER_RESPONDED_POLLS_LIST_URL + '/' + credentials.user_id)

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
  },

  getPollResponses(context, credentials, redirect) {
    const _this = context

    axios.get(
      POLL_RESPONSES_URL + '/' + credentials.poll_id)
      .then(function (res) {
        _this.poll.question = res.data.data[0].question
        _this.poll.poll_options = res.data.data
        _this.poll.poll_total = res.data.data.length

        let pollCountArr = []
        let optionCount = countBy(_this.poll.poll_options, 'option_value')
        let keys = Object.keys(optionCount)

        map(keys, (o, i) => {
          let obj = {
            option_value: o,
            value: optionCount[o].valueOf()
          }
          pollCountArr.push(obj)
        })

        console.log('pollCountArr', pollCountArr);

        _this.poll.poll_counts = pollCountArr
      })
      .catch(function (error) {
        _this.error = error.response.data.message
      });
  },

  editPoll(context, credentials, redirect) {
    const _this = context

    let body = credentials

    let config = {
      headers: auth.getAuthHeader()
    }

    axios.put(USER_EDIT_POLL_URL + '/' + credentials.poll_id, body, config)
      .then(function (res) {
        router.push(redirect)
      })
      .catch(function (error) {
        _this.error = error.response.data.message
      });
  }
}
