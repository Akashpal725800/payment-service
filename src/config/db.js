const mongoose=require('mongoose')

const connectDB=async ()=>{
  try {
       await mongoose.connect(process.env.MONGODB_URL)
       console.log(`Mongoose db is connected successfull`)
    
  } catch (error) {
    console.log(`database connnection error ${error}`)
    
  }
}
module.exports=connectDB