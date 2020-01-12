module.exports = function(sequelize, DataTypes) {
  var Friends = sequelize.define("Friends", {
    username: DataTypes.STRING,
    real_name: DataTypes.STRING,
    profile_pic: DataTypes.STRING
  });

  Friends.associate = models => {
    Friends.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    })
  }

  return Friends;
};
