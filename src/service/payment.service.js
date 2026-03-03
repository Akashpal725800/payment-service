const command = require("../command/payment.command");
const query = require("../queries/payment.queries");
const dto = require("../dto/payment.dto");

const createPayment = async (data) => {
  const payload = dto.createDTO(data);
  return await command.createPayment(payload);
};

const getAllPayments = async () => {
  console.log("SERVICE: calling queries");

  const result = await query.getAllPayments();

  return result;
};

const getPaymentById = async (id) => {
  return await query.getPaymentById(id);
};

const updatePayment = async (id, data) => {
  return await command.updatePayment(id, data);
};

const deletePayment = async (id) => {
  return await command.deletePyament(id);
};

module.exports = {
  createPayment,
  getAllPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
};