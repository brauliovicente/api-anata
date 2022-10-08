'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('associados', 
    { 
      id: {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
      },
      numAssociado:{
        type:Sequelize.STRING(30),
        allowNull:false,
        requered:true
      },
      numBI:{
        type:Sequelize.STRING(30),
        allowNull:false,
        requered:true
      },
      nome:{
        type:Sequelize.STRING(100),
        requered:true
      },
      dataNascimento:{
        type:Sequelize.DATE,
        requered:true
      },
      genero:{
        type:Sequelize.CHAR(2),
        requered:true
      },
      funcao:{
        type:Sequelize.STRING(30),
        requered:true
      },
      cargo:{
        type:Sequelize.STRING(30),
        requered:true
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
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('associados');
  }
};
