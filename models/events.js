module.exports = function(sequelize, DataTypes) {
  var Events = sequelize.define("Events", {
    name: DataTypes.STRING,
    event: DataTypes.STRING,
    date: DataTypes.DATE
  });

  Events.associate = models => {
    Events.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    })
  }

  return Events;
};
