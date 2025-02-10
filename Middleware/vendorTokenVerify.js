const jwt = require('jsonwebtoken')
const dotEnv = require('dotenv').config()
const Vendor = require('../Model/Vendor')

const tokenVerify = async (req,res,next)=>{
    try {
            const token = req.headers.authorization?.split(' ')[1]
        if(!token){
            res.status(405).json('enter your token')
        }
        const encoded = await jwt.verify(token,process.env.token_key)
        const idCheck = await Vendor.findById(encoded.vendorId)
        req.userId = idCheck
        next()
    } catch (error) {
        console.log(error)
        res.status(505).json('enter valid token')
    }
}

module.exports = tokenVerify