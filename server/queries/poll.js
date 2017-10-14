const db = require('../db')
const pgp = db.$config.pgp;

exports.getPoll = (req, res) => {
  console.log('req', req);
  console.log('res', res);

  res.status(200)
}
exports.getPollResponses = (req, res) => {
  console.log('req', req);
  console.log('res', res);

  res.status(200)
}
exports.getUserCreatedPolls = (req, res) => {
  res.status(200)
}

exports.createPoll = function (req, res, next) {
  // Get Creators UserId

  let uuid = helpers.createUUID()
  let body = req.body
  body.uuid = uuid
  body.createdDate = new Date()

  // Creating the Questions in the Poll will have to make another call (not sure if it will be triggered by this call or not, need to research that.)

  db.none('insert into poll(poll_id,question,date,user_id)' +
    'values(${poll_id},${question},${createdDate},${user_id})',
    body)
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
