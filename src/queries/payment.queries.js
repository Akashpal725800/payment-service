const repo = require("../repository/payment.repository");

const getAllPayments = async () => {
  const data = await repo.findAll();
  return data; 
};

const getPaymentById = async (id) => {
  const data = await repo.findById(id);
  return data;
};

module.exports = {
  getAllPayments,
  getPaymentById,
};