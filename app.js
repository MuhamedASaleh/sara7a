const express = require(`express`);
const app = express();
const mongoose = require(`mongoose`);
const { init } = require("./model/user.model");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(require(`./router/app.router`));

mongoose
  .connect(`mongodb://localhost:27017/sarahaProject`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen((port) => {
      console.log(`app run on port : ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
