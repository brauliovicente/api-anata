const Sequelize = require('sequelize');
const database = require('./db');
const Associado=require("../models/Associado");
 
const Quota = database.define('Quota', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    idAssociado: {
        type: Sequelize.INTEGER,
        foreignKey:true,
        allowNull: false
    },
    quota: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    refMensal: {
        type: Sequelize.STRING(25),
        allowNull: false
    },
      createdAt:{
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updatedAt:{
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
},{
  tableName:'quotas',
});

Quota.associate=()=>{
  Quota.belongsTo(Associado,{
    foreignKey:'idAssociado'
  });
};


module.exports = Quota;
