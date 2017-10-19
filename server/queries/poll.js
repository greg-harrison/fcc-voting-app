const db = require('../db')
const pgp = db.$config.pgp;

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
  console.log('req', req);
  console.log('res', res);

  res.status(200)
}

exports.createPoll = function (req, res, next) {
  // Get Creators UserId

  // let uuid = helpers.createUUID()
  let body = req.body
  // body.uuid = uuid
  body.createdDate = new Date()

  const { title, options } = req.body
  // From Form

  res.send(req.body)

  // // Writing to 2 tables at once

  // db.none('insert into poll(poll_id,question,date,user_id)' +
  //   'values(${poll_id},${question},${createdDate},${user_id})',
  //   body)
  //   .then(function (data) {
  //     body.password = null
  //     res.status(200)
  //       .json({
  //         body
  //       })
  //     return res.json(data)
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
