const userModel = require(`../model/user.model`);
const bcrypt = require(`bcryptjs`);
const { validationResult } = require(`express-validator`);
const jwt = require(`jsonwebtoken`);
module.exports = async (req, res) => {
  const { email, password } = req.body;
  try {
    const signInError = validationResult(req);
    if (signInError.isEmpty()) {
      let user = await userModel.findOne({ email });
      if (user) {
        let match = await bcrypt.compare(password, user.password);
        if (match) {
          let token = jwt.sign(
            {
              username: user.username,
              userId: user._id,
              role: user.role,
              isLoggedIn: true,
            },
            "shika",
            {
              expiresIn: `1h`,
            }
          );
          res.json({ message: "done", token });
          module.exports = token;
        } else {
          res.json({ message: "incorrect password" });
        }
      } else {
        res.json({ message: "email does't exist" });
      }
    } else {
      res.json({ error: signInError.array() });
    }
  } catch (error) {
    res.json({ message: "catch error ", error });
  }
};
