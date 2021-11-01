module.exports = (connection) => {
  const sequelize = require("sequelize");
  return connection.define("categories", {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: sequelize.STRING
  });
};
