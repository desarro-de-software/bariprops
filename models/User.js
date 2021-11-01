module.exports = (connection) => {
  const sequelize = require("sequelize");

  return connection.define("users", {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: sequelize.STRING,
    email: sequelize.STRING,
    username: sequelize.STRING,
    phone: sequelize.STRING,
    profile_pic: sequelize.STRING,
    birthday: sequelize.DATE
  });
};
