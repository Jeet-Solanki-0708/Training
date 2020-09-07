const express = require("express");
const user = require("../model/user");
const moment = require("moment");
const bcrypt = require("bcrypt");
const auth = require("../js/auth");


const router = new express.Router();

router.post("/signup", async (req, res) => {
  let { email, password, age, role = "user" } = req.body;
  age = parseInt(age);

  password = await bcrypt.hash(password, 8);
  user.User.create({
    email,
    password,
    age,
    role,
    createdAt: moment().format("MMMM Do YYYY, h:mm:ss a"),
    updatedAt: moment().format("MMMM Do YYYY, h:mm:ss a"),
    createdBy: email,
    updatedBy: email,
  })
    .then(async (data) => {
      const token = await auth.generateJWT(data, email);

      res.status(200).send({ token: token });
    })
    .catch((err) => {
      const errorMessage = err.errors[0].message;
      return res.status(400).send({ errorMessage });
    });
});

module.exports = router;
