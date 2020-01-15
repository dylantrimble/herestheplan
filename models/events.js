module.exports = function(sequelize, DataTypes) {
  var Events = sequelize.define("Events", {
    name: DataTypes.STRING,
    date: DataTypes.DATE
  });

  Events.associate = models => {
    Events.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    })
  }

  // Events.associate = models => {
  //   Events.hasMany(models.Places, {
  //     onDelete: "cascade"
  //   })
  // }

  return Events;
};
