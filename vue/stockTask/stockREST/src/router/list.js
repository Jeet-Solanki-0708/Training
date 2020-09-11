const express = require("express");
const user = require("../model/user");
const auth = require("../js/auth");
const customer = require("../model/customer");
const profile = require("../model/profile");

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

router.get("/details",async (req,res)=>{
  const result = await profile.Customer.findOne({
    where: { username: 'dhairya' },
    include: profile.Profile
  });
  console.log("Result :-"+JSON.stringify(result));
  res.send({result})
})

router.post("/details",async (req,res)=>{
  const amidala = await Customer.create({
    username: 'd',
    points: 1000,
    profiles: [{
      name: 'd1'
    }]
  }, {
    include: Profile
  });
})

module.exports = router;
