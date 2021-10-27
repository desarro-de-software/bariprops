module.exports = (connection) => {
    const sequelize = require("sequelize");

    return connection.define('status',{
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: sequelize.STRING,
    })
}
