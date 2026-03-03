const express=require("express")
const app=express()

app.use(express.json())
const paymentRoutes = require("./routes/payment.routes");

app.use("/api/payments", paymentRoutes);

module.exports=app