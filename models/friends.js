module.exports = function(sequelize, DataTypes) {
  var Friends = sequelize.define("Friends", {
    username: DataTypes.STRING,
    real_name: DataTypes.STRING,
    profile_pic: DataTypes.STRING
  });
  return Friends;
};
