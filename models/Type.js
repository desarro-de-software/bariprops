module.exports = (connection) => {
  const sequelize = require("sequelize");

  return connection.define("types", {
    id: {
      type: sequelize.UUID,
      primaryKey: true
    },
    name: sequelize.STRING
  });
};
