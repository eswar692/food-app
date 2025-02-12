const express = require('express')
const dotEnv = require('dotenv').config()
const app = express()
const mongoose = require('mongoose')
app.use(express.json())
const route = require('./Routes/route')
const firmRoute = require('./Routes/firmRoute')
const productRoute = require('./Routes/productRoute')
const path = require('path')
const cors = require('cors')
app.use(cors())

const port = process.env.port || 3000

app.use('/vendor',route)
app.use('/firm',firmRoute)
app.use('/product',productRoute)


mongoose.connect(process.env.mongo_url)
.then(()=>{console.log('mongo db connected')})
.catch((error)=>{console.log(error)})


app.listen(port,()=>{
    console.log('server running at port 3000')
    
})



