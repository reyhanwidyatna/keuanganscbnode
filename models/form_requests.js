'use strict';
module.exports = (sequelize, DataTypes) => {
  const form_requests = sequelize.define('form_requests', {
    user_id: DataTypes.BIGINT,
    date: DataTypes.DATE,
    method: DataTypes.STRING,
    allocation: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
    attachment: DataTypes.STRING,
    notes: DataTypes.STRING,
    is_confirmed_pic: DataTypes.BOOLEAN,
    is_confirmed_verificator: DataTypes.BOOLEAN,
    is_confirmed_head_dept: DataTypes.BOOLEAN,
    is_confirmed_cashier: DataTypes.BOOLEAN,
    bank_name: DataTypes.STRING,
    bank_code: DataTypes.STRING,
    account_number: DataTypes.STRING,
    account_owner: DataTypes.STRING,
    status_id: DataTypes.INTEGER
  }, {});
  form_requests.associate = function(models) {
    // associations can be defined here
  };
  return form_requests;
};