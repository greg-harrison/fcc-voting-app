// Considered a "junction table" because it's purely made up of foreign keys and 1 primary

module.exports = function (sequelize, DataTypes) {
  let pollResponse = sequelize.define('poll_response', {
    response_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    poll_id: DataTypes.INTEGER,
    poll_option_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  });

  return pollResponse
}
