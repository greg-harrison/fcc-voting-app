const mainController = require('./main')
const DB = require('../models/')

exports.createUser = (req, res) => {
  console.log('req.data', req.data);
  DB.user.create(data).then((user) => {
    console.log(user.get())
  })
  res.status(200)
}
exports.getUser = (req, res) => {
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
