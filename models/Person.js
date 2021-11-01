module.exports = (connection) => {
  const sequelize = require("sequelize");

  return connection.define("people", {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: sequelize.STRING,
    email: sequelize.STRING,
    address: sequelize.STRING
  });
};
