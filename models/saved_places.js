module.exports = function(sequelize, DataTypes) {
  var SavedPlaces = sequelize.define("SavedPlaces", {
    name: DataTypes.STRING,
    start_at: DataTypes.TIME,
    event: DataTypes.STRING,
    date: DataTypes.DATE
  });
  return SavedPlaces;
};