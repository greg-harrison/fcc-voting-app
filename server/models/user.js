module.exports = function (sequelize, DataTypes) {
  let user = sequelize.define("user", {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
      freezeTableName: true,
      tableName: "user",
      timestamps: false
    });

  user.sync()

  return user
}
