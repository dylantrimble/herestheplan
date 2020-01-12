module.exports = function(sequelize, DataTypes) {
  var SavedPlaces = sequelize.define("SavedPlaces", {
    name: DataTypes.STRING,
    location: DataTypes.STRING
  });

  SavedPlaces.associate = models => {
    SavedPlaces.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    })
  }
  return SavedPlaces;
};