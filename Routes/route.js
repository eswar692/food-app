const express = require('express')
const vendor = require('../Controller/VendorController')
const route = express.Router()


route.post('/register',vendor.vendorRegister)
route.post('/login',vendor.vendorLogin)
route.get('/all-vendors',vendor.AllVendors)
route.get('/get-one-vendor/:id',vendor.oneVendor)

module.exports = route