
module.exports = (req,res)=>{
   try {
        let fullURL = req.protocol +"://"+req.headers.host+"/"+req.userId
        res.json({fullURL})
   } catch (error) {
    res.json({message:"catch error"})
   }

}
