const mongoose = require('mongoose')
const { type } = require('os')

const firmSchema = new mongoose.Schema({
    firmName:{
        type:String,
        require:true,
        unique:true
    },
    area:{
        type:String,
        require:true
    },
    category:{
        type:[
            {
                type:String,
                enum:['veg','non-veg']
            }
        ]
    },
    region:{
        type:[{
            type:String,
            enum:['south-indian','north-indian','chinese','bakery']
        }
        ]
    },
    offer:{
        type:String
    },
    image:{
        type:String
    },
    vendor:[{
        
            type:mongoose.Schema.Types.ObjectId,
            ref:'Vendor'
            }
    ],
    product:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product'
            }
    ]

})

const firmModel = mongoose.model('Firm',firmSchema)
module.exports = firmModel