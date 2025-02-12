//const tokenVerify = require('../Middleware/vendorTokenVerify')
const Firm = require('../Model/Firm')
const multer = require('multer')
const Vendor = require('../Model/Vendor')
const { product } = require('./productController')

const storage =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, 'uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null, Date.now()+'-'+file.originalname)
    }
})
const upload = multer({storage:storage})

const addFirm  = async (req,res)=>{
    const {firmName, area, category, region, offer} = req.body
    
   
    try {
        const image = req.file?.filename
        const saveData = await Firm({
            firmName,
            area,
            category,
            region,
            offer,
            image,
            vendor:req.vendorId
        })
        const firmData = await saveData.save()
        const vendor = await Vendor.findOne(req.vendorId); // Fetch the Vendor document
        
        
          
         vendor.firm.push(firmData)
          await vendor.save()
           

        res.status(201).json('Firm Added Successfully')
        
    } catch (error) {
        
        console.log(error)
        res.status(502).json('firm not added.try again')
    }
}

const deleteFirmById = async(req,res)=>{
    try {
        const firmId = req.params.firmId
        const deleteFirm =  await Firm.findByIdAndDelete(firmId)
        if(!deleteFirm){return res.status(404).json('Firm not found')}
        res.status(201).json('Firm Deleted Successfullly')
    } catch (error) {
        console.log(error)
        res.status(502).json('firm not added.try again')
    }
}

const file = upload.single('image')
module.exports = {firm:[file,addFirm], deleteFirmById}