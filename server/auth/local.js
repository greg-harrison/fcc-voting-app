const LocalStrat = require('passport-local').Strategy
const authHelpers = require('../queries/helpers')

const db = require('../db')

const options = {
  usernameField: 'email'
}

module.exports = new LocalStrat(options, (username, password, done) => {
  //Check the DB for the user's email -- This is what we'll use in place of a username
  console.log('HELLO WORLD');
  console.log('username', username);

  // db.one will reject if there are more than on entry, making it perfect for this
  db.one('select * from public.user where email = $1', username)
    .then((user) => {
      if (!user) return done(null, false)
      if (!authHelpers.comparePass(password, user.password)) {
        return done(null, false)
      } else {
        return done(null, user)
      }
    })
    .catch((err) => { return done(err) })

})

