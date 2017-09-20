module.exports = function (sequelize, DataTypes) {
  let poll = sequelize.define('poll', {
    poll_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id_created: {
      type: DataTypes.INTEGER,
    },
    question: DataTypes.STRING,
    createdDate: DataTypes.DATE
  });

  return poll
}
