module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    profile_pic: DataTypes.STRING
  });

  User.associate = models => {
    User.hasMany(models.Events, {
      onDelete: "cascade"
    })
  }

  User.associate = models => {
    User.hasMany(models.Friends, {
      onDelete: "cascade"
    })
  }

  User.associate = models => {
    User.hasMany(models.SavedPlaces, {
      onDelete: "cascade"
    })
  }


  return User;
};
