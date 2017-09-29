const express = require('express')
const router = express.Router()

router.use('/poll', require('./poll'))
router.use('/user', require('./user'))
router.use('/auth', require('./auth'))
