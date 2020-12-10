const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

const User = require("../../models/User");
const { json } = require("express");

router.post("/register", (req, res) => {
  console.log("register ");
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

router.get("/login?", (req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.query);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.query.email;
  const password = req.query.password;
  console.log(password);

  // Find user by email
  User.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.json({ emailnotfound: "Wrong Credentials" });
    }

    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        res.status(200).json({
          msg: "logged in",
        });
      } else {
        return res.json({ flag: "Wrong password" });
      }
    });
  });
});

module.exports = router;
