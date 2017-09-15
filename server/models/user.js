const pg = require('pg')

module.exports = function (sequelize, DataTypes) {
  let user = sequelize.define('user', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    }
  }
  );
  user.sync({ force: true }).then(() => {
  });

  return user
}
