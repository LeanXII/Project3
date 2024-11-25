const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const knex = require("knex")(require("./knexfile")["development"]);

router.get("/", (req, res) => {
  res.status(200).json("Made it to the homepage");
});

router.post("/create", async (req, res) => {
  const { firstname, lastname, email, password } = await req.body;
  const salt = bcrypt.genSaltSync(10);

  try {
    if (!firstname || !lastname || !email || !password) {
      throw new Error();
    }

    const hash = bcrypt.hashSync(password, salt);
    knex("users")
      .insert({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: hash,
      })
      .then(() => res.status(201).json({ authenticate: true }));
  } catch (err) {
    res.status(500).json({
      authenticate: false,
      message: err.message,
    });
  }
});

router.post("/existing", (req, res) => {
  console.log("existing route request on the backend:", req.body);
  const { email, password } = req.body;
  try {
    knex("users")
      .select("password")
      .where({ email: email })

      .then((hashArray) => {
        if (hashArray.length === 0) {
          res.status(200).json("No user found");
        } else {
          userAuth = bcrypt.compareSync(password, hashArray[0].password);
          res.status(200).json(userAuth);
        }
      });
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
