const express = require('express')
const userRoutes = require('./userRoutes.js')
const app = express()

//here is where you define root paths you want to use
app.use('/users', userRoutes)


const port = 8080;

app.listen(port, ()=>console.log(`http://localhost:${port}`))