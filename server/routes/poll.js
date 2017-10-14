const express = require('express')
const router = express.Router()
const pollQueries = require('../queries/poll')

// assume starts with /poll
router.get('/:poll_id', pollQueries.getPoll)
router.get('/list/:user_id', pollQueries.getUserCreatedPolls)
router.get('/responses/:poll_id', pollQueries.getPollResponses)

// Creation Routes
router.put('/create/', pollQueries.createPoll)
router.put('/update/:poll_id', pollQueries.editPoll)
router.put('/respond/:poll_id/:response_id/:user_id/', pollQueries.respondToPoll)

module.exports = router
