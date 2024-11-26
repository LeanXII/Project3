const express = require('express')
const cors = require('cors')
const session = require('express-session')
const userRoutes = require('./userRoutes.js')
const homeRoutes = require('./homeRoutes.js')
const app = express()

app.use(express.json())


app.use((req, res, next)=>{
  if(req.session){
    req.session.destroy();
  }
  next();
})

app.use((req, res, next)=>{
  res.on('finish',()=>{
    console.log('Set-Cookie-Header:', res.getHeader('Set-Cookie'))
  })
  next()
})

app.use(session({
  secret: 'session-token-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    path: '/',
    sameSite: 'lax',
    secure: false,
    httpOnly: true,
    maxAge: 24*60*60*1000
  }
}))

app.use(cors({
  origin: ['http://localhost:5173', 'http://frontend:5173'],
  credentials: true
}));
//here is where you define root paths you want to use
app.use('/users', userRoutes)
app.use('/home', homeRoutes)

const port = 3000;

app.listen(port, ()=>console.log(`http://localhost:${port}`))