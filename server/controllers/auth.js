const mainController = require('./main')
// I believe this is a client-side module.
const auth0 = require('auth0-js')

module.exports = {
  handleLogin: (req, res) => {

    console.log('req', req);
    console.log('res', res);
    console.log('json', json);
  }
}
