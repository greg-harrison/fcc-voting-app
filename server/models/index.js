const dotenv = require('dotenv').config()
const Sequelize = require('sequelize')
const pg = require('pg')

pg.defaults.ssl = true

if (process.env.PG_CONNECTION_URI) {
  const sequelize = new Sequelize(process.env.PG_CONNECTION_URI, {})
} else {
  console.log('Connection failed: Need connection URI for Heroku Database')
}

let db = {}

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach((file) => {
    const model = sequelize['import'](path.join(__dirname, file))
    db[model.name] = model
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch((err) => {
    console.log('Unable to connect to the database:', err)
  });

db.sequelize = sequelize
db.Sequelize = Sequelize

// Import Models such that I can use them in the api just by importing 'db'
db.poll = require('./poll')(sequelize, Sequelize)
db.user = require('./user')(sequelize, Sequelize)

module.exports = db
