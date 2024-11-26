const express = require("express");
const router = express.Router();
const axios = require("axios");

router.use(express.json());


router.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173")
  next()
})

router.get("/", async (req, res) => {


  try {
    const response = await axios.get("http://ip-api.com/json/");

    res.status(200).json({
      ip: response.data.query,
      countryISO: response.data.contryCode,
      region: response.data.region,
      city: response.data.city,
      lat: response.data.lat,
      lon: response.data.lon
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = router;
