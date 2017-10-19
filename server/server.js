const express = require('express')
const routes = require('./routes')
const logger = require('morgan')
const cors = require('cors')
const middleware = require('./middleware')

const passport = require('passport')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const port = process.env.VOTE_BE_PORT || 8081


const app = express()

let corsOptions = {
  "origin": true,
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204,
  "maxAge": 3600
}

app.use(cors(corsOptions));
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json('*/*'));
app.use(cookieParser())

// passport set-up
console.log('process.env.VOTE_PASSPORT_SECRET', process.env.VOTE_PASSPORT_SECRET);
app.use(session({
  secret: process.env.VOTE_PASSPORT_SECRET,
  resave: false,
  saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(middleware.malformedUrl)
app.use(middleware.verifyUserAuth)
app.use('/', routes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
