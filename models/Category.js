module.exports = (connection) => {
  const sequelize = require("sequelize");
  return connection.define("categories", {
    id: {
      type: sequelize.UUID,
      primaryKey: true
    },
    name: sequelize.STRING
  });
};
