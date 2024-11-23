const express = require('express')
const userRoutes = require('./userRoutes.js')
const homeRoutes = require('./homeRoutes.js')
const app = express()

//here is where you define root paths you want to use
app.use('/users', userRoutes)
app.use('/home', homeRoutes)

const port = 3000;

app.listen(port, ()=>console.log(`http://localhost:${port}`))