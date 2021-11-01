const { DATE } = require("sequelize");

module.exports = (connection) => {
  const sequelize = require("sequelize");
  return connection.define("photos", {
    id: {
      type: sequelize.UUID,
      primaryKey: true
    },
    path: sequelize.STRING
  });
};
