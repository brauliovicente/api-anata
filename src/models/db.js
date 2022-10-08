const mysql = require("mysql");
const sequelize = require("sequelize");

mysql.createConnection("mysql://localhost:3306/anataapi");

const Sequelize = new sequelize("anataapi", "root", "",{
    dialect:"mysql",
    host:"localhost"
});

module.exports=Sequelize;
