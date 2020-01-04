module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    real_name: DataTypes.STRING,
    password: DataTypes.STRING,
    profile_pic: DataTypes.STRING
  });
  return User;
};
