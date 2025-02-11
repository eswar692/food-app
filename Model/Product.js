const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    category: {
       type: [
        {
            type:String,
            enum:['veg','non-veg']
        }
       ]
    },
    image:{
        type:String,
        require:true
    },
    bestSeller:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    firm:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Firm'
        }
    ]

})

const product = mongoose.model('Product',productSchema)

module.exports = product
