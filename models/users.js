module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    profile_pic: DataTypes.STRING
  });
  return User;
};
