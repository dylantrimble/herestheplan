module.exports = function(sequelize, DataTypes) {
  var SavedPlaces = sequelize.define("SavedPlaces", {
    name: DataTypes.STRING,
    location: DataTypes.STRING
  });
  return SavedPlaces;
};