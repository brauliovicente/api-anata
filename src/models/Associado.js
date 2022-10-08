const sequelize = require("sequelize");
const database=require('./db');
const Quota=require('./Quota');

const Associado= database.define('Associado', {
    id: {
        type:sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    numAssociado:{
        type:sequelize.STRING(30),
        allowNull:false,
        requered:true
    },
    numBI:{
        type:sequelize.STRING(30),
        allowNull:false,
        requered:true
    },
    nome:{
        type:sequelize.STRING(100),
        requered:true
    },
    dataNascimento:{
        type:sequelize.DATE,
        requered:true
    },
    genero:{
        type:sequelize.CHAR,
        requered:true
    },
    funcao:{
        type:sequelize.STRING(30),
        requered:true
    },
    cargo:{
        type:sequelize.STRING(30),
        requered:true
    },

},
{
    timestamps:true,
    tableName:'associados',
}
);

Associado.associate=()=>{
    Associado.hasMany(Quota,{
      foreignKey:'idAssociado'
    });
  };

module.exports=Associado;