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
  //   DB.poll.findAll({
  //     where: ({
  //       user_id_created: req.params.user_id
  //     }),
  //     include: [
  //       {
  //         model: DB.user
  //       }
  //     ]
  //   })
  //     .then((poll) => {
  //       console.log('res', res);
  //       res.status(200).send(poll);
  //     })
  res.status(200)
}
exports.createPoll = (req, res) => {
  console.log('req', req);
  console.log('res', res);

  res.status(200)
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
