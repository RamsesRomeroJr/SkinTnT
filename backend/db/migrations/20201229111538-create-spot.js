'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      longitude: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      latitude: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING
      },
      zipcode: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      url:{
        allowNull: false,
        type: Sequelize.STRING
      }
      ,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Spots');
  }
};
