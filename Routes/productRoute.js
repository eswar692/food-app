const product = require('../Controller/productController')
const express = require('express')
const route = express.Router()
const path = require('path')

route.post('/add-products/:firmId',product.product)
route.get('/get-vendor-products/:firmId',product.firmProductsGet)
route.get('/upload/:imageName',(req,res)=>{
    const image = req.params.imageName
    res.set("Content-Type","image/pdf")
    res.sendFile(path.join(__dirname,'..','uploads',image))
})
route.delete('/delete-product/:productId', product.deleteProductById)

module.exports = route