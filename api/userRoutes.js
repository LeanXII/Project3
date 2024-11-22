const express = require('express')
const router = express.Router()


router.get('/', (req, res)=>{
  res.status(200).json('Made it to the homepage')
})






module.exports = router