module.exports = (connection) => {
  const sequelize = require("sequelize");

  return connection.define("messages", {
    id: {
      type: sequelize.UUID,
      primaryKey: true
    },
    message: sequelize.STRING
  });
};
