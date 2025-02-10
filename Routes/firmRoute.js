const tokenVerify = require('../Middleware/vendorTokenVerify')
const express = require('express')
const route = express.Router()
const firmController = require('../Controller/FirmController')

route.post('/add-firm',tokenVerify,firmController.firm)

module.exports = route