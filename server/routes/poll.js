const express = require('express')
const router = express.Router()
const pollQueries = require('../queries/poll')
const middleware = require('../middleware')

// assume starts with /poll
router.get('/:poll_id', pollQueries.getPoll)
router.get('/list/all', pollQueries.getAllPollsList)
router.get('/list/:user_id', pollQueries.getUserCreatedPolls)
router.get('/responses/:poll_id', pollQueries.getPollResponses)

// Creation Routes
router.post('/create', middleware.verifyUserAuth, pollQueries.createPoll)
// router.put('/update/:poll_id', pollQueries.editPoll)
router.post('/respond', pollQueries.respondToPoll)

module.exports = router
