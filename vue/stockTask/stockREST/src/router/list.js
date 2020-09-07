const express = require("express");
const user = require("../model/user");
const auth = require("../js/auth");

const router = new express.Router();

router.get("/list", (req, res) => {
  user.User.findAll()
    .then(async (data) => {
      res.status(200).send({ data: data });
    })
    .catch((err) => {
      return res.status(400).send({ errorMessage });
    });
});

module.exports = router;
