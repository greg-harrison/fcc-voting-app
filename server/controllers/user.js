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
    DB.user.findAll({
      where: ({
        user_id: req.params.user_id
      })
    }).then((user) => {
      console.log('user', user);
      console.log('res', res);
      res.status(200).send(user);
    })
    console.log('res', res);
  }
}
