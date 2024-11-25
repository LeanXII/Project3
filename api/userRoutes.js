const express = require("express");
const router = express.Router();



const knex = require('knex')(require('./knexfile')["development"]);

router.get("/", (req, res) => {
  res.status(200).json("Made it to the homepage");
});

router.post("/create", async (req, res) => {
  console.log('This is the req.body on the backend', req.body);
  const { firstname, lastname, email, password } = await req.body;


  try{
    if(!firstname || !lastname || !email || !password){
      throw new Error
    }
    knex("users")
    .insert({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    })
    .then(() => res.status(201).json({ authenticate: true }))
  } catch(err){
    res.status(500).json({
      authenticate: false,
      message: err.message,
    });
  };
});

module.exports = router;
