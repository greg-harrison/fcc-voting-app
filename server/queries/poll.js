const db = require('../db')
const pgp = db.$config.pgp;
const helpers = require('./helpers')
const _ = require('lodash')

exports.getPoll = (req, res, next) => {
  let pollId = req.params.poll_id;
  db.any(
    `SELECT
      public.poll.poll_id,
      public.poll.question,
      public.poll.created_date,
      public.poll.user_id_created,
      public.poll_option.poll_option_id,
      public.poll_option.poll_id,
      public.poll_option.option_value
    FROM
  	  public.poll
    INNER JOIN public.poll_option ON public.poll.poll_id = public.poll_option.poll_id
    WHERE public.poll.poll_id = $1`,
    pollId)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved one poll'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

exports.getUserCreatedPolls = (req, res, next) => {
  let userId = req.params.user_id;

  db.any(
    `SELECT * FROM public.poll
    WHERE public.poll.user_id_created = $1`,
    userId
  )
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved user polls'
        })
    })
    .catch(function (err) {
      return next(err)
    })
}

exports.getPollResponses = (req, res) => {
  res.status(200)
}

exports.createPoll = function (req, res, next) {
  // Get Creators UserId

  let uuid = helpers.createUUID()
  let body = req.body

  body.user_id = req.data.user_id

  // Need to go back into the DB and init my Primary Keys as type UUID, poll_id, poll_option_id

  body.poll_id = uuid
  body.createdDate = new Date()

  _.map(body.options, (x, i) => {
    let new_id = helpers.createUUID()
    x.poll_id = body.poll_id
    x.option_id = new_id
    console.log('x', x);
  })


  const { title, options } = req.body
  // From Form

  res.send(req.body)

  //   Multi-Table Update

  //   -- We'll do something akin to this
  //   UPDATE Table_One a INNER JOIN Table_Two b ON (a.userid = b.userid)
  // SET
  //   a.win = a.win+1, a.streak = a.streak+1, a.score = a.score+200,
  //   b.win = b.win+1, b.streak = b.streak+1, b.score = b.score+200
  // WHERE a.userid = 1 AND a.lid = 1 AND b.userid = 1

  // OLD _ THIS DOESN'T WORK
  // db.none('insert into poll(poll_id,question,created_date,user_id_created)' +
  //   'values(${poll_id},${question},${createdDate},${user_id})',
  //   body)
  //   .then(function (data) {
  //     db.each('insert into poll_options(poll_id, option, option_id)' +
  //       'values(${poll_id},${option},${option_id})',
  //       body.options)
  //       .then(function (data) {
  //         console.log('res', res);
  //         body.password = null
  //         res.status(200)
  //           .json({
  //             body
  //           })
  //         return res.json(data)

  //       })
  //   })
  //   .catch(function (err) {
  //     return next(err)
  //   })
}

exports.editPoll = (req, res) => {
  console.log('req', req);
  console.log('res', res);

  res.status(200)
}

exports.respondToPoll = (req, res) => {
  console.log('req', req);
  console.log('res', res);

  res.status(200)
}
