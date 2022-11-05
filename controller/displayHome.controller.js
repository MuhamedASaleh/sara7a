const messageModel = require(`../model/message.model`);
module.exports = async (req, res) => {
  try {
    let messageList = await messageModel.find({ userID: req.userId });
    res.json({messageList,name:req.username,userID: req.userId , role:req.role})
  } catch (error) {
    res.json({ message: "catch error" });
  }
};
