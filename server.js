const express = require('express')
const dotEnv = require('dotenv').config()
const app = express()
const mongoose = require('mongoose')
app.use(express.json())
const route = require('./Routes/route')
const firmRoute = require('./Routes/firmRoute')
const productRoute = require('./Routes/productRoute')

app.use('/vendor',route)
app.use('/firm',firmRoute)
app.use('/product',productRoute)

mongoose.connect(process.env.mongo_url)
.then(()=>{console.log('mongo db connected')})
.catch((error)=>{console.log(error)})


app.listen(3000,()=>{
    console.log('server running at port 3000')
    console.log('server speed running d one more test')
})



