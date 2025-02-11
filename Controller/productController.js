const Product = require('../Model/Product')
const Firm = require('../Model/Firm')
const multer = require('multer')
const Vendor = require('../Model/Vendor')
const path = require('path')

const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null,'uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null, Date.now()+ path.extname(file.originalname))
    }
})
const upload = multer({storage:storage})

const productAdd = async(req,res)=>{
    const {productName, price, category, bestSeller, description} = req.body
    try {
        const image = req.file?.filename
    const firmId = req.params.firmId
    const verifyFirm = await Firm.findById(firmId)
    if(!verifyFirm){res.status(404).json("vendor not found")}
    const addProducts = Product({
        productName,
        price,
        category,
        image,
        bestSeller,
        description,
        firm:verifyFirm._id
    })
    const saveProduct = await addProducts.save()
      verifyFirm.product.push(saveProduct)
     await verifyFirm.save()
    res.status(201).json('Product added successfully')

    } catch (error) {
        console.log(error)
        res.status(501).json('input error try again')
    }
}

module.exports = {product:[upload.single('image'),productAdd]}