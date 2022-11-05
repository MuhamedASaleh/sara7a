
const mongoose = require(`mongoose`)

const messageSchema = mongoose.Schema({
    desc :String,
    creator :{type:mongoose.Schema.Types.ObjectId ,ref:"user"},
  

},{
timestamps:true})

const messageModel = mongoose.model(`message`,messageSchema)

module.exports = messageModel