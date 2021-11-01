module.exports = (Connection) => {
  const sequelize = require("sequelize");
  return Connection.define("favorites", {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  });
};
