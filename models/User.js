module.exports = (connection) => {
  const sequelize = require("sequelize");

  return connection.define("users", {
    id: {
      type: sequelize.UUID,
      primaryKey: true
    },
    username: sequelize.STRING,
    password: sequelize.STRING
  });
};
