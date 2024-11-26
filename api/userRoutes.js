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
      .then(() => res.status(201).json({ accountCreated: true }));
  } catch (err) {
    res.status(500).json({
      accountCreated: false,
      message: err.message,
    });
  }
});

router.post("/existing", (req, res) => {
  const { email, password } = req.body;
  try {
    knex("users")
      .select("password", "id", "email")
      .where({ email: email })

      .then((dataArray) => {
        console.log(dataArray);
        if (
          dataArray.length === 0 ||
          !bcrypt.compareSync(password, dataArray[0].password)
        ) {
          res.status(200).json("No user found");
        } else {
          req.session.user = {
            id: dataArray[0].id,
            email: dataArray[0].email,
          };

          req.session.save((err) => {
            if (err) {
              console.error("Issue saving session");
              return res.status(500).json({ message: "Express session error" });
            }

            res.status(200).json({
              userAuth: true,
              id: req.session.user.id,
              email: req.session.user.email,
            });
          });
        }
      });
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
});
router.get("/session_check", (req, res) => {
  try {
    if (req.session.user) {
      res.status(200).json({ sessionEmail: req.session.user.email });
    } else {
      res.status(200).json({ Message: "User needs to login" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
