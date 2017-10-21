const passport = require('passport')
const db = require('../db')
const pgp = db.$config.pgp

module.exports = () => {

  //For whatever reason, Passport isn't storing the USER ID in the session
  passport.serializeUser((user, done) => {
    done(null, user.user_id)
  })

  passport.deserializeUser((id, done) => {
    db.one('select * from public.user where user_id = $1', id)
      .then((user) => { done(null, user) })
      .catch((err) => { done(err, null) })
  })
}
