const createDTO=(data)=>({
    name:data.name,
    email:data.email,
    amount:data.amount,
    paymentMethod:data.paymentMethod,
    status:data.status,
    transactionId: data.transactionId,
})
module.exports = {createDTO};