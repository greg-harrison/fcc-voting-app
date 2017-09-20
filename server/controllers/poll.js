const mainController = require('./main')
const DB = require('../models/')

module.exports = {
  getPoll: (req, res) => {
    console.log('req', req);
    console.log('res', res);
  },
  getPollResponses: (req, res) => {
    console.log('req', req);
    console.log('res', res);

  },
  getUserCreatedPolls: (req, res) => {
    DB.poll.findAll({
      where: ({
        user_id_created: req.params.user_id
      }),
      include: [
        {
          model: DB.user
        }
      ]
    })
      .then((poll) => {
        console.log('res', res);
        res.status(200).send(poll);
      })
  },
  createPoll: (req, res) => {
    console.log('req', req);
    console.log('res', res);
  },
  editPoll: (req, res) => {
    console.log('req', req);
    console.log('res', res);
  },
  respondToPoll: (req, res) => {
    console.log('req', req);
    console.log('res', res);
  }
}
