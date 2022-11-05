
const {check} = require(`express-validator`)

module.exports = [
    check(`username`).matches(/^[A-Za-z]+([\A-Za-z-]+)*$/),
    check(`email`).isEmail(),
    check(`password`).matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*_]).{8,}$/),
    check(`cpassword`).custom((value,{req})=>{
        if(value === req.body.password){
            return true
        } else {
            return false
        }
    })
]