const db = require('../db')
const pgp = db.$config.pgp;
const helpers = require('./helpers')
const _ = require('lodash')

exports.getPoll = (req, res, next) => {
  let pollId = req.params.poll_id;
  console.log('pollId', pollId);
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

exports.getUserRespondedPolls = (req, res, next) => {
  let userId = req.params.user_id;

  db.any(
    `
    SELECT * FROM public.poll
    LEFT OUTER JOIN public.poll_response ON public.poll.poll_id = public.poll_response.poll_id
    LEFT OUTER JOIN public.poll_option ON public.poll.poll_id = public.poll_option.poll_id
    AND public.poll_option.poll_option_id = public.poll_response.poll_option_id
    WHERE public.poll_response.user_id = $1
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
  console.log('req', req);
  let poll_id = req.params.poll_id

  db.any(
    `
    SELECT * FROM public.poll
    LEFT OUTER JOIN public.poll_response ON public.poll.poll_id = public.poll_response.poll_id
    LEFT OUTER JOIN public.poll_option ON public.poll.poll_id = public.poll_option.poll_id
    AND public.poll_option.poll_option_id = public.poll_response.poll_option_id
    WHERE public.poll.poll_id = $1
    `,
    poll_id
  )
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

exports.createPoll = function (req, res, next) {

  let uuid = helpers.createUUID()
  let body = req.body

  body.user_id = req.data.user_id

  body.poll_id = uuid
  body.createdDate = new Date()

  _.map(body.options, (x, i) => {
    x.poll_id = body.poll_id
    x.poll_option_id = helpers.createUUID()
  })

  db.tx(t => {
    const pollCreate = db.none('insert into poll(poll_id,question,created_date,user_id_created)' +
      'values(${poll_id},${question},${createdDate},${user_id})',
      body)

    const queries = [
      pollCreate
    ]

    for (let i = 0; i <= body.options.length - 1; i++) {
      let option = body.options[i]
      queries.push(
        db.any('insert into poll_option(poll_id,poll_option_id,option_value)' +
          'values((select poll_id from poll where poll_id = ${poll_id}),${poll_option_id},${option_value})',
          option)
      )
    }

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


exports.editPoll = (req, res, next) => {
  let body = req.body

  body.poll_id = req.params.poll_id

  db.tx(t => {
    const pollUpdate = db.none(
      'UPDATE public.poll SET question = ${question} WHERE poll_id = ${poll_id}',
      body
    )

    _.map(body.options, (x, i) => {
      x.poll_id = body.poll_id
    })

    const queries = [
      pollUpdate
    ]

    for (let i = 0; i <= body.options.length - 1; i++) {
      let option = body.options[i]

      if (!!option.poll_option_id) {
        queries.push(
          db.none(
            'UPDATE public.poll_option SET option_value = ${option_value} WHERE poll_option_id = ${poll_option_id}',
            option
          )
        )
      }
      else {
        option.poll_option_id = helpers.createUUID()

        queries.push(
          db.none('insert into poll_option(poll_id,poll_option_id,option_value)' +
            'values((select poll_id from poll where poll_id = ${poll_id}),${poll_option_id},${option_value})',
            option)
        )
      }
    }

    for (let i = 0; i <= body.deleted.length - 1; i++) {
      let candidate = body.deleted[i]
      console.log('candidate', candidate);

      if (!!candidate.poll_option_id) {
        queries.push(
          db.none(
            'DELETE FROM public.poll_option WHERE poll_option_id = ${poll_option_id}',
            candidate
          )
        )
      }
    }

    return t.batch(queries)
  })
    .then(function (data) {
      res.status(200)
        .json({
          body
        })
      return res.json(body)
    })
    .catch(function (err) {
      return next(err)
    })
}

exports.respondToPoll = (req, res) => {
  let uuid = helpers.createUUID()
  let body = req.body

  body.user_id = req.data.user_id
  body.response_id = uuid

  db.any('insert into public.poll_response(user_id,response_id,poll_id,poll_option_id)' +
    'values(${user_id},${response_id},(select poll_id from poll where poll_id = ${poll_id}),${poll_option_id})',
    body)
    .then(function (data) {
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
