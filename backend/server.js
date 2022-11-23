const express = require('express')
const dotenv = require('dotenv').config()
const goalRouters = require('./routes/goalRouters')
const  port  = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extends:false}))

app.use('/api/goals', goalRouters)

app.listen(port, ()=> console.log(`msg_  Server started at http:\\localhost:${port} `));