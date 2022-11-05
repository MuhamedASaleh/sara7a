const { validationResult } = require(`express-validator`);

const nodeMailer = require(`nodemailer`);

const sendgridTransporter = require(`nodemailer-sendgrid-transport`);

const userModel = require(`../model/user.model`);

const bcrypt = require(`bcryptjs`);

let transporter = nodeMailer.createTransport(
  sendgridTransporter({
    auth: {
      user: "oonoomagek3@gmail.com",
      pass: "Mosale@1911",
    },
  })
);

module.exports = async (req, res) => {
  const { username, email, password, cpassword } = req.body;
  try {
    const signUpError = validationResult(req);
    if (signUpError.isEmpty()) {
      let user = await userModel.findOne({ email });
      if (user) {
        res.json({ message: "email exist" });
      } else {
        bcrypt.hash(password, 7, async (err, hash) => {
          await userModel
            .insertMany({
              username,
              email,
              password: hash,
            })
            .then();
          res
            .json({ message: "user Added" })
            
             await transporter.sendMail({
                to: email,
                from: "oonoomagek3@gmail.com",
                subject: "signup succeeded",
                html: "<h1>you successfully signup</h1>",
              })
            .catch((err) => {
              console.log(err);
            });
        });
      }
    }
   
  } catch (error) {
    res.json({ message: "catch error ", error });
  }
};
