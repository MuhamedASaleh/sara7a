const messageModel = require(`../model/message.model`);
module.exports = async (req, res) => {
    try {
        await messageModel.insertMany({ desc:req.body.desc,creator:req.userId});
        res.json({message: "message added"})
  } catch (error) {
    res.json({message: "error adding message"})
    
  }
};
