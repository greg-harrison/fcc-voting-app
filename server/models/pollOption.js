module.exports = function (sequelize, DataTypes) {
  let pollOption = sequelize.define('poll_option', {
    poll_option_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    poll_id: {
      type: DataTypes.INTEGER,
    },
    option: DataTypes.STRING,
  });

  return pollOption
}
