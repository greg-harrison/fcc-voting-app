const express = require('express')
const router = express.Router()
const userQueries = require('../queries/user')
const authHelpers = require('../queries/helpers')

// start with /user
router.get('/:user_id', authHelpers.loginRequired, (req, res, next) => {
  return userQueries.getUser(req, res, next)
})
router.post('/create', userQueries.createUser)
router.post('/login', userQueries.loginUser)

module.exports = router
