module.exports = (connection) => {
  const sequelize = require("sequelize");

  return connection.define("properties", {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: sequelize.STRING,
    /* category_id: ,
    user_id: , */
    rooms: sequelize.INTEGER,
    description: sequelize.STRING,
    price: sequelize.FLOAT,
    adress: sequelize.STRING,
    pets: sequelize.BOOLEAN,
    kids: sequelize.BOOLEAN
    /* type_id: ,
    status_id: , */
  });
};
