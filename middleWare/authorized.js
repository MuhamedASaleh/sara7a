
module.exports = (role)=>{
   try {
    return (req,res,next)=>{
        if (req.role === role) {
            next()
        } else {
            res.json({message:"not allowed user"})
        }
    }
   } catch (error) {
    res.json({message:"catch error"})
   }
}
