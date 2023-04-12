const Sequelize = require("Sequelize");
const connection = new Sequelize('guiapress', 'root', '123456789',{
    host: 'localhost',
    dialect:'mysql'
});

module.exports = connection;