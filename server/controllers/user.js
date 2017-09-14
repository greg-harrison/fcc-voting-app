const mainController = require('./main')

module.exports = {
  createUser: (req, res) => {
    console.log('req', req);
    console.log('res', res);
  },
  getUser: (req, res) => {
    console.log('req', req);
    console.log('res', res);
  }
}
