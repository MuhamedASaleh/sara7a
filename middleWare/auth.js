const jwt = require(`jsonwebtoken`);
module.exports = (req, res, next) => {

  try {
    const token = req.header(`authrized`)
    if (token && token != null && token != undefined) {
      jwt.verify(token, `shika`, (err, decoded) => {
        if (err) {
          res.json({ message: "token error" });
        } else {
          if (decoded.isLoggedIn) {
            req.username = decoded.username;
            req.userId = decoded.userId;
            req.role = decoded.role;
            next();
          } else {
            res.json({ message: "u have to login first" });
          }
        }
      });
    } else {
      res.json({ message: "invalid token" });
    }
  } catch (error) {
    res.json({ message: "catch error" });
  }
};
