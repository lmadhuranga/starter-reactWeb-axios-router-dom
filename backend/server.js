const express = require('express')
const dotenv = require('dotenv').config()
const goalRouters = require('./routes/goalRouters')
const userRouters = require('./routes/userRouters')
const { errorHandler }  = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const  port  = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals', goalRouters)
app.use('/api/users', userRouters)

app.use(errorHandler)

app.listen(port, ()=> console.log(`msg_  Server started at http:\\localhost:${port} `));