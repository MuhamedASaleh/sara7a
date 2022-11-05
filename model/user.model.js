
const mongoose = require(`mongoose`)

const userSchema = mongoose.Schema({
    username :String,
    email :String,
    password :String,
    role:{type:String , default:`user`},
}
,{
    timestamps: true
})

const userModel = mongoose.model(`user`,userSchema)

module.exports = userModel