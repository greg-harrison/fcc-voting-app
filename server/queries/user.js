const db = require('../db')
const jwt = require('jsonwebtoken')
const pgp = db.$config.pgp
const bcrypt = require('bcryptjs')
const helpers = require('./helpers')

exports.createUser = function (req, res, next) {
  let uuid = helpers.createUUID()
  let body = req.body
  let hashedPass = bcrypt.hashSync(req.body.pass, 10)

  body.uuid = uuid
  body.password = hashedPass

  db.none('insert into public.user(name,email,password,user_id)' +
    'values(${name},${email},${password},${uuid})',
    body)
    .then(function (data) {
      body.password = null
      res.status(200)
        .json({
          token: jwt.sign(
            { email: body.email, name: body.name, user_id: body.uuid },
            process.env.VOTE_BCRYPT_SECRET
          ),
          user: body
        })
      return res.json(data)
    })
    .catch(function (err) {
      return next(err)
    })
}

exports.loginUser = function (req, res, next) {
  let body = req.body
  db.one('select * from public.user where email = $1', body.email)
    .then(function (data) {
      if (helpers.comparePass(body.pass, data.password)) {
        data.password = null
        res.status(200)
          .json({
            token: jwt.sign(
              { email: data.email, name: data.name, user_id: data.user_id },
              process.env.VOTE_BCRYPT_SECRET
            ),
            user: data
          });
      } else {
        res.status(403)
          .json({
            message: 'Authentication Failed. Wrong Password'
          })
      }
    })
    .catch(function (err) {
      return next(err)
    })
}

exports.getUser = (req, res, next) => {
  var userId = req.params.user_id;
  db.one('select * from public.user where user_id = $1', userId)
    .then(function (data) {
      data.password = null
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
