
module.exports = (connection)=> {
    const sequelize = require("sequelize");

    return connection.define('messages',{
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        } ,
        message: sequelize.STRING
    });
}
