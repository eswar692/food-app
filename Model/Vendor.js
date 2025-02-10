const mongoose = require('mongoose')

const vendor = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
        
    },
    password:{
        type:String,
        require:true
    },
    firm:[
        {  type:mongoose.Schema.Types.ObjectId,
            ref:'Firm'
        }
    ]
})

const VendorModel = mongoose.model('Vendor',vendor)

module.exports = VendorModel
