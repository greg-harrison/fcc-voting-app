const express = require('express')
const router = express.Router()
const pollController = require('../controllers/poll')

// assume starts with /poll
router.get('/:poll_id', pollController.getPoll)

router.get('/list/:user_id', pollController.getUserCreatedPolls)

router.get('/responses/:poll_id', pollController.getPollResponses)
router.get('/create/', pollController.createPoll)

router.put('/update/:poll_id', pollController.editPoll)

router.put('/respond/:poll_id/:response_id/:user_id/', pollController.respondToPoll)

module.exports = router
