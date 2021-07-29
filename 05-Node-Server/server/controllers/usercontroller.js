const router = require("express").Router();
const User = require("../db").import("../models/user");
const jwt = require("jsonwebtoken");

router.post("/create", function (req, res) {
  let userModel = {
    email: req.body.user.email,
    password: req.body.user.password,
  };
  User.create(userModel)
    .then(function createSuccess(user) {
      let token = jwt.sign({ id: user.id }, "i_am_secret", {
        expiresIn: 60 * 60 * 24,
      });
      // let responseObject = {
      //   user: user,
      // };
      res.json({
        user: user,
        message: "User Successfully created",
        sessionToken: token,
      });
    })
    .catch(function (err) {
      res.status(500).json({ error: err });
    });
});

router.post("/login", function (req, res) {
  User.findOne({ where: { email: req.body.user.email } })
    .then(function loginSuccess(user) {
      if (user) {
        res.status(200).json({ user: user });
      } else {
        res.send("User Not Found");
      }
    })
    .catch(function (err) {
      res.status(500).json({ error: err });
    });
});

module.exports = router;
