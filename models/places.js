module.exports = function(sequelize, DataTypes) {
  var Places = sequelize.define("Places", {
    name: DataTypes.STRING,
    start_at: DataTypes.TIME,
    address: DataTypes.STRING
  });
  return Places;
};
