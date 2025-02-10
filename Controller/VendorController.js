const Vendor = require('../Model/Vendor')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const dotEnv = require('dotenv').config()

const vendorRegister = async (req,res)=>{
    const {username,email,password} =req.body

    try {
        const vendorMail =await  Vendor.findOne({email})
        if(vendorMail){
            res.status(401).json('email already exist')
        }
       


        const hashedPassword = await bcrypt.hash(password,10)
        const newVendor = await Vendor({
            username,
            email,
            password:hashedPassword

        })
        await newVendor.save()
        res.status(201).json('vendor Register successfully')
        
    } catch (error) {
        console.log(error)
        res.status(501).json(error)        
    }
}

const vendorLogin  = async (req,res)=>{
    const {email,password} = req.body
    try {
         const vendor = await Vendor.findOne({email})
        const checkPassword = await bcrypt.compare(password,vendor.password)
        const token = await jwt.sign({vendorId:vendor._id},process.env.token_key,{expiresIn: '1h'})
        if( vendor && checkPassword){
            res.status(201).json({user:"login successfuly",token})
        }else{
            res.status(401).json('Vendor Authrntication Failed, Try again')
        }
        
    } catch (error) {
        console.log(error)
        res.status(501).json(error)  
        
    }
}

const AllVendors = async (req,res)=>{
    try {
        const vendors = await Vendor.find().populate('firm')
        res.status(201).json(vendors)
        
    } catch (error) {
        console.log(error)
        res.status(501).json({message:"Vendors getting failed"})  
    }
}

const oneVendor = async(req,res)=>{
    try {
        const id = await Vendor.findById(req.params.id).populate('firm')
        if(!id){res.status(404).json('vendor id wrong try again')
        }
        res.status(201).json(id)

        
    } catch (error) {
        console.log(error)
        res.status(501).json({message:"invalid Vendor Id"})  
    }
}


module.exports = {vendorRegister,vendorLogin,AllVendors,oneVendor}