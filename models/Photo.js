const { DATE } = require("sequelize"); //IMPORTANDO DATE DE SEQUELIZE (DATE ES TIPO DE DATO)

module.exports = (connection) => { //EXPORTAMOS LA FUNCION QUE ESTA DESDE EL 6 AL 17 
    const sequelize = require ("sequelize");  //AGARRAMOS ALGO DE UNA LIBRERIA, POR LO CUAL SERIA IMPORTAR "SEQUELIZE DE LA LIBRERIA SEQUELIZE"

    return connection.define('photos',{ //ESTO ES LO QUE RETONRA
        id: { //ACA DEFENIMOS LA TABLA LLAMADA PHOTOS
            type: sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true

        } ,
        /*property_id*/
        path:sequelize.STRING

    });
}