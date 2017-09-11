const express = require('express')
const router = express.Router()

// router.use('/vote', require('./votes'))

router.get('/', (req, res) => {
  res.send(200, 'Server is sending this to the front end! WOWIE!')
})

module.exports = router
