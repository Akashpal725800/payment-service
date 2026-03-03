const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    name: {type: String,required: true },
    email: {type: String},
    amount: { type: Number, required: true},
    paymentMethod: {
      type: String,
      enum: ["upi", "card", "netbanking", "cash"],
      default: "upi",
    },

    status: {type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },

    transactionId: {
      type: String,
    },
  },
  {
    timestamps: true,
  });
module.exports = mongoose.model("Payment", paymentSchema);