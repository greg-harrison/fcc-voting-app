const express = require('express')
const router = express.Router()

router.use('/poll', require('./poll'))
router.use('/user', require('./user'))

router.get('/', (req, res) => {
  res.status(200).send('Server is sending this to the front end! WOWIE!')
})

module.exports = router

// Getting the list of options for a poll in POSTGRES
// SELECT
// 	poll.poll_id,
//     poll_option_id,
//     option_value,
//     question
// FROM poll
// 	LEFT JOIN poll_option on poll.poll_id = poll_option.poll_id
// WHERE poll.poll_id = ID

// Getting User from postgres
// SELECT *
// FROM public."user"
// WHERE user_id = ID

// Getting Polls created by user by User Id
// SELECT
// 	poll_id,
//     question,
//     created_date,
//     public."user".name,
//     public."user".email
// FROM poll
// 	LEFT JOIN public."user" on poll.user_id_created = public."user".user_id
// WHERE poll.user_id_created = ID

// Getting Total Responses for a specific poll_id
// SELECT
// 	poll.poll_id,
//  response_id
// FROM poll_response
// 	LEFT JOIN poll on poll.poll_id = poll_response.poll_id
// WHERE poll.poll_id = ID

// Getting Responses By specific users to a specific poll
// SELECT
// 	poll.poll_id,
//     public."user".user_id,
//     poll_option.poll_option_id,
//    	response_id
// FROM poll_response
// 	LEFT JOIN poll on poll.poll_id = poll_response.poll_id
// 	LEFT JOIN poll_option on poll_option.poll_option_id = poll_response.poll_option_id
//     LEFT JOIN public."user" on public."user".user_id = poll_response.user_id
// WHERE poll.poll_id = ID

// + authenticateUser() -> not sure what auth0 uses for it's authenticated, more research needed
// + logoutUser() -> userId* <submit the user's id and remove their window authtoken>
// + getUserPolls() -> userId*
// + getPollById() -> userId*, pollId* <getPollById will be the same route as getUserPolls, with pollId as an option param>
// + createPoll() -> userId*, title, question, response1, response2
// + editPoll() -> userId*, title, question, response1, response2
// + createResponse() -> pollId, userId*, response
// + getResponse() -> pollId, userId, response <userId is required to get the response>
// + editResponse() -> pollId, userId, response <userId is required to edit the response>

