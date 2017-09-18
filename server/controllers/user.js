const mainController = require('./main')
const DB = require('../models/')

module.exports = {
  createUser: (req, res) => {
    let data = {
      user_id: 2,
      name: 'Greg Test',
      email: 'harrison.test@gmail.com'
    }
    DB.user.create(data).then((user) => {
      console.log(user.get())
    })
  },
  getUser: (req, res) => {
    console.log('req.params', req.params);
    DB.user.findAll({
      where: ({
        user_id: req.params.user_id
      })
    }).then((user) => {
      return user;
    })
  }
}
