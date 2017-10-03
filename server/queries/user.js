const db = require('../db')
const pgp = db.$config.pgp;
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt'))
const helpers = require('./helpers')

exports.createUser = async function (req, res, next) {
  let uuid = helpers.createUUID()
  let body = req.body
  let hashedPass = await bcrypt.hashAsync(req.body.password, 16.5)
  body.uuid = uuid
  body.password = hashedPass

  db.none('insert into public.user(name,email,password,user_id)' +
    'values(${name},${email},${password},${uuid})',
    body)
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

exports.loginUser = async function (req, res, next) {
  let body = req.body

  db.one('select * from public.user where email = $1', body.email)
    .then(function (data) {
      if (helpers.comparePass(body.password, data.password)) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved one authorized user'
          });
      }
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