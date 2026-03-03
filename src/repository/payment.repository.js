const Payment=require("../model/payment")

const create=(data)=>{
 return Payment.create(data)
}

const findAll=(filter)=>{
    return Payment.find(filter).sort({createAt:-1})
}

const findById=(id)=>{
    return Payment.findById(id);
}

const updateById = (id, data) =>
  Payment.findByIdAndUpdate(id, data, {new: true,runValidators: true});
const deleteById=(id)=>{
    return Payment.findByIdAndDelete(id)
}
module.exports = {
  create,
  findAll,
  findById,
  updateById,
  deleteById,
};