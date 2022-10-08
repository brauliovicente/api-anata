'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('quotas',{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      idAssociado: {
          type: Sequelize.INTEGER,
          allowNull: false,
          onDelete: 'CASCADE',
         references:{
          model:'associados',
          key:'id'
         }
          
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
    
    })
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('quotas');
  }
};
