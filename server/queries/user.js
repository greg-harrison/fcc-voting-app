const db = require('../db')
const pgp = db.$config.pgp;

exports.createUser = (req, res) => {
  let data = {
    user_id: 2,
    name: 'Greg Test',
    email: 'harrison.test@gmail.com'
  }
  db.user.create(data).then((user) => {
    console.log(user.get())
  })
  res.status(200)
}
exports.getUser = (req, res, next) => {
  console.log('req', req.params);
  var userId = parseInt(req.params.user_id);
  db.one('select * from public.user where user_id = $1', userId)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE human'
        });
    })
    .catch(function (err) {
      return next(err);
    });

  // db.user.findAll({
  //   where: ({
  //     user_id: req.params.user_id
  //   })
  // }).then((user) => {
  //   console.log('user', user);
  //   console.log('res', res);
  //   res.status(200).send(user);
  // })
  // console.log('res', res);
}

