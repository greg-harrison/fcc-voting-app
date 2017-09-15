const mainController = require('./main')
const DB = require('../models/')

module.exports = {
  createUser: (req, res) => {
    console.log('req', req);
    let data = {
      name: 'Greg Test',
      email: 'harrison.test@gmail.com'
    }
    DB.user.create(data).then((user) => {
      console.log(user.get())
    })
  },
  getUser: (req, res) => {
    console.log('req', req);
    console.log('res', res);
  }
}
