const repo=require('../repository/payment.repository')

const createPayment=(data)=>repo.create(data)
const updatePayment=(id,data)=>repo.updateById(id,data)
const deletePyament=(id)=>repo.deleteById(id)

module.exports={
    createPayment,
    updatePayment,
    deletePyament
}