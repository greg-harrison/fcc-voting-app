'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
      freezeTableName: true,
      tableName: "user",
      timestamps: false
    }, {
      classMethods: {
        associate: function (models) {
          // associations can be defined here
        }
      }
    });
  return User;
};
