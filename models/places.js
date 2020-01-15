module.exports = function(sequelize, DataTypes) {
  var Places = sequelize.define("Places", {
    name: DataTypes.STRING,
    start_at: DataTypes.TIME,
    address: DataTypes.STRING
  });

  Places.associate = models => {
    Places.belongsTo(models.Events, {
      foreignKey: {
        allowNull: false
      }
    })
  };

  return Places;
};

