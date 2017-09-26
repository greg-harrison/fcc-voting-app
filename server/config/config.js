// Seems redundant to have this config object

module.exports = {
  "development": {
    "username": process.env.VOTE_PG_USER,
    "password": process.env.VOTE_PG_SECRET,
    "database": process.env.VOTE_PG_DATABASE,
    "host": process.env.VOTE_PG_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.VOTE_PG_USER,
    "password": process.env.VOTE_PG_SECRET,
    "database": process.env.VOTE_PG_DATABASE,
    "host": process.env.VOTE_PG_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.VOTE_PG_USER,
    "password": process.env.VOTE_PG_SECRET,
    "database": process.env.VOTE_PG_DATABASE,
    "host": process.env.VOTE_PG_HOST,
    "dialect": "postgres"
  },
}
