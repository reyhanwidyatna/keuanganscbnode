'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('form_requests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.BIGINT
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      method: {
        type: Sequelize.STRING  
      },
      allocation: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.DECIMAL
      },
      attachment: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.STRING
      },
      is_confirmed_pic: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      is_confirmed_verificator: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      is_confirmed_head_dept: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      is_confirmed_cashier: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      bank_name: {
        type: Sequelize.STRING
      },
      bank_code: {
        type: Sequelize.STRING
      },
      account_number: {
        type: Sequelize.STRING
      },
      account_owner: {
        type: Sequelize.STRING
      },
      status_id: {
        type: Sequelize.INTEGER
      },
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
    return queryInterface.dropTable('form_requests');
  }
};