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

  user.associate = (models) => {
    user.belongsTo(poll, { as: "user_id_created" }); // Adds roleId to user rather than userRoleId
  }

  user.sync()

  return user
}
