const express = require("express");
const user = require("../model/user");
const moment = require("moment");
const bodyParser = require("body-parser");
const auth = require("../js/auth");
const bcrypt = require("bcrypt");

const router = new express.Router();

router.post("/signin", (req, res) => {
  let { email, password } = req.body;
  user.User.findAll({
    where: {
      email: email,
    },
  })
    .then(async (data) => {
      const match = await bcrypt.compare(password, data[0].password);
      if (data.length === 0 || match === false) {
        const errorMessage = "Enter correct Email/Password";
        return res.status(200).send({ token: null, error: errorMessage });
      }
       await user.User.update(
         { updatedAt: moment().format("MMMM Do YYYY, h:mm:ss a") },
         {
           where: {
             createdBy: email,
           },
         }
       )
         .then((innerdata) => {
           if (innerdata.length === 0) {
             return res.status(404).send();
           }
         })
         .catch((err) => {});
      const token = await auth.generateJWT(data[0], "a");
      res.status(200).send({ token: token, error: null });
    })
    .catch((err) => {
      return res.status(400).send({ errorMessage });
    });
});

module.exports = router;
