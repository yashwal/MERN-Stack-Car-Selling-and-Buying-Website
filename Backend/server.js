const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");

const app = express();
app.use(require("cors")());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

const dbKeys = require("./config/keys").mongoURI;

mongoose
  .connect(dbKeys, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDb connected succesfully"))
  .catch((err) => console.log(err));

app.use(passport.initialize());

app.use("/api/users", users);
require("./config/passport")(passport);
app.use("/api/users", users);

const port = 5000;
app.listen(port, () => console.log("Server is up and running on 5000"));
