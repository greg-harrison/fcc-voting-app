const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')

// start with /auth
router.use('/login', authController.handleLogin)

module.exports = router
