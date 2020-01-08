import Sequelize from "sequelize";

const sequelize = new Sequelize("project3", "root", {
  host: "127.0.0.1",
  dialect: "mysql",
  operatorsAliases: false
});

module.exports = sequelize;

global.sequelize = sequelize;
