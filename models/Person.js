module.exports = (connection) => {
  const sequelize = require("sequelize");

  return connection.define("people", {
    id: {
      type: sequelize.UUID,
      primaryKey: true
    },
    name: sequelize.STRING,
    email: sequelize.STRING,
    address: sequelize.STRING
  });
};
