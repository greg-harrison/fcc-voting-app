// need to set up the model
const mainController = require('./main')

module.exports = {
  getPoll: (req, res) => {
    console.log('req', req);
    console.log('res', res);
  },
  getPollResponses: (req, res) => {
    console.log('req', req);
    console.log('res', res);
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
