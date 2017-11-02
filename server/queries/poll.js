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
    LEFT OUTER JOIN public.poll_option ON public.poll.poll_id = public.poll_option.poll_id
    WHERE public.poll.poll_id = $1`,
    pollId)
    .then(function (data) {
      console.log('data', data);
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

exports.getAllPollsList = (req, res, next) => {
  // Get CREATED BY USER NAME to display
  // So it'll be a left join with the User Table to get the creator's name
  db.any(
    `
    SELECT * FROM public.poll
    LEFT OUTER JOIN public.user ON public.poll.user_id_created = public.user.user_id
    ORDER BY
    public.poll.created_date desc
    `
  )
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all polls'
        })
    })
    .catch(function (err) {
      return next(err)
    })
}

exports.getUserCreatedPolls = (req, res, next) => {
  let userId = req.params.user_id;

  db.any(
    `
    SELECT * FROM public.poll
    WHERE public.poll.user_id_created = $1
    ORDER BY
    public.poll.created_date desc
    `,
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

  // Call is failing to send back the options on newly created polls. Issue might be in here

  body.poll_id = uuid
  body.createdDate = new Date()

  _.map(body.options, (x, i) => {
    let new_id = helpers.createUUID()
    x.poll_id = body.poll_id
    x.poll_option_id = new_id
  })

  db.tx(t => {
    const pollUpdate = db.none('insert into poll(poll_id,question,created_date,user_id_created)' +
      'values(${poll_id},${question},${createdDate},${user_id})',
      body)

    const queries = [
      pollUpdate
    ]

    for (let i = 0; i <= body.options.length - 1; i++) {
      let option = body.options[i]
      queries.push(
        db.any('insert into poll_option(poll_id,poll_option_id,option_value)' +
          'values((select poll_id from poll where poll_id = ${poll_id}),${poll_option_id},${option_value})',
          option)
      )
    }

    console.log('queries', queries);

    console.log('body.options', body.options);

    return t.batch(queries)
  })
    .then(function (data) {
      body.password = null
      res.status(200)
        .json({
          body
        })
      return res.json(data)
    })
    .catch(function (err) {
      return next(err)
    })
}

exports.respondToPoll = (req, res) => {
  console.log('req', req);
  console.log('res', res);

  res.status(200)
}
