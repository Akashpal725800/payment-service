const service = require("../service/payment.service");

const create = async (req, res) => {
  try {
    console.log("CREATE BODY:", req.body);

    const result = await service.createPayment(req.body);

    console.log("CREATE RESULT:", result);

    res.status(201).json(result);
  } catch (err) {
    console.error("CREATE ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};


const findAll = async (req, res) => {
  try {
    console.log("GET ALL called");

    const result = await service.getAllPayments();

    console.log("GET ALL RESULT:", result);

    res.status(200).json(result);
  } catch (err) {
    console.error("GET ALL ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};


const findById = async (req, res) => {
  try {
    console.log("GET ID:", req.params.id);

    const result = await service.getPaymentById(req.params.id);

    console.log("GET ID RESULT:", result);

    res.status(200).json(result);
  } catch (err) {
    console.error("GET ID ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};


const update = async (req, res) => {
  try {
    console.log("UPDATE ID:", req.params.id);
    console.log("UPDATE BODY:", req.body);

    const result = await service.updatePayment(
      req.params.id,
      req.body
    );

    console.log("UPDATE RESULT:", result);

    res.status(200).json(result);
  } catch (err) {
    console.error("UPDATE ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};


const remove = async (req, res) => {
  try {
    console.log("DELETE ID:", req.params.id);

    const result = await service.deletePayment(req.params.id);

    console.log("DELETE RESULT:", result);

    res.status(200).json({
      message: "Payment deleted",
      data: result,
    });
  } catch (err) {
    console.error("DELETE ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};


module.exports = {
  create,
  findAll,
  findById,
  update,
  remove,
};
