const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

// start with /user
router.get('/create', userController.createUser)
router.get('/:user_id', userController.getUser)

module.exports = router
