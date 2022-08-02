const Sequelize = require('sequelize');

const sequelize = new Sequelize("usuario", "root", "12345678", {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log("Success: Database conection running.")
}).catch(function(){
    console.log("Error: Database conection failed.")
})

module.exports = sequelize;