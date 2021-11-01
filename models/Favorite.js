module.exports = (Connection) => {
  const sequelize = require("sequelize");
  return Connection.define("favorites", {
    id: {
      type: sequelize.UUID,
      primaryKey: true
    }
  });
};
