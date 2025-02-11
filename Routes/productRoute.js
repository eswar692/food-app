const product = require('../Controller/productController')
const express = require('express')
const route = express.Router()

route.post('/add-products/:firmId',product.product)

module.exports = route