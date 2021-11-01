module.exports = (Connection) => {
  const sequelize = require("sequelize");

  return Connection.define("chats", {
    id: {
      type: sequelize.UUID,
      primaryKey: true
    },
    name: sequelize.STRING
  });
};
