const db = require('../db')
const pgp = db.$config.pgp;

exports.createUser = (req, res, next) => {
  console.log('req', req);
  console.log('req.body', req.body);
  // db.none checks to see that there doesn't already exist a record matching the criteria of the query

  // TODO: Need to figure out how to generate a UNIQUE USER ID (uuid) for everything I insert

  db.none('insert into public.user(user_id,name,email,password)' +
    'values(3,${name},${email},${password})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted a user'
        })
    })
    .catch(function (err) {
      return next(err)
    })
}

exports.getUser = (req, res, next) => {
  var userId = parseInt(req.params.user_id);
  db.one('select * from public.user where user_id = $1', userId)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved one user'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

exports.getAllUsers = (req, res, next) => {
  db.manyOrNone('select * from public.user')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all users'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}
