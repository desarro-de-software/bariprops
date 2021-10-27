module.exports = (Connection) => {
  const sequelize = require("sequelize");

  return Connection.define("chats", {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: sequelize.STRING
  });
};
