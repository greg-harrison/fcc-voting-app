const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

// start with /user
router.get('/:user_id', userController.getUser)
router.post('/create', userController.createUser)

module.exports = router
