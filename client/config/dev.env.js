var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VOTE_API_URL: JSON.stringify(process.env.VOTE_API_URL),
  VOTE_AUTH0_DOMAIN: JSON.stringify(process.env.VOTE_AUTH0_DOMAIN),
  VOTE_AUTH0_CLIENTID: JSON.stringify(process.env.VOTE_AUTH0_CLIENTID),
  VOTE_FE_PORT: JSON.stringify(process.env.VOTE_FE_PORT)
})
