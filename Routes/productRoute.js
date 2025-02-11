const product = require('../Controller/productController')
const express = require('express')
const route = express.Router()

route.post('/add-products/:firmId',product.product)
route.get('/get-vendor-products/:firmId',product.firmProductsGet)

module.exports = route