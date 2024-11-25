const express = require('express')
const cors = require('cors')
const userRoutes = require('./userRoutes.js')
const homeRoutes = require('./homeRoutes.js')
const app = express()

app.use(express.json())
app.use(cors());
//here is where you define root paths you want to use
app.use('/users', userRoutes)
app.use('/home', homeRoutes)

const port = 3000;

app.listen(port, ()=>console.log(`http://localhost:${port}`))