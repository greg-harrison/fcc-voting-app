module.exports = function (sequelize, DataTypes) {
  let poll = sequelize.define('poll', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING
  });

  return poll
}
