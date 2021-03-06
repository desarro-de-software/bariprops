module.exports = (connection) => {
  const sequelize = require("sequelize");

  return connection.define("users", {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: sequelize.STRING,
    password: sequelize.STRING
  });
};
