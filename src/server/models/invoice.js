
const Sequelize = require('sequelize');
module.exports = function (sequelize) {
  const invoice = sequelize.define('invoice', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
    },
    invoice_number: {
      type: Sequelize.STRING,
    },
    total: {
      type: Sequelize.DECIMAL(13,2),
    },
    currency: {
      type: Sequelize.STRING,
    },
    invoice_date: {
      type: Sequelize.DATEONLY,
    },
    due_date: {
      type: Sequelize.DATEONLY,
    },
    vendor_name: {
      type: Sequelize.STRING,
    },
    remittance_address: {
      type: Sequelize.STRING,
    },
  }, {
    timestamps: true,
  });
  return invoice;
};
