const authGuard = require("../auth/authGuard");
const braceletModel = require("../models/braceletModel");
const cloudinary = require("cloudinary");
const router = require("express").Router();

router.post("/add", authGuard, async(req,res) => {
    console.log(req.body);
    const { braceletName, braceletDescription, braceletCategory, braceletPrice, braceletDetailDescription } = req.body;
    const { braceletImagea } = req.files;
    if(!braceletName || !braceletDescription || !braceletCategory || !braceletPrice || !braceletDetailDescription){
        return res.status(422).json({error: "Please enter all fields"});
    }

const uploadedImage = await cloudinary.v2.uploader.upload(
    braceletImagea.path,
    {
        folder: "enchantia",
        crop: "scale"
    },
    // braceletImageb.path,
    // {
    //     folder: "enchantia",
    //     crop: "scale"
    // },
    // braceletImagec.path,
    // {
    //     folder: "enchantia",
    //     crop: "scale"
    // },
    // braceletImaged.path,
    // {
    //     folder: "enchantia",
    //     crop: "scale"
    // },

);
    try{
        const newbracelet = new braceletModel({
            bracname: braceletName,
            bracdescription: braceletDescription,
            braccategory: braceletCategory,
            bracprice: braceletPrice,
            bracdetaildescription: braceletDetailDescription,
            bracimagea: uploadedImage.secure_url,
            // bracimageb: uploadedImage.secure_url,
            // bracimagec: uploadedImage.secure_url,
            // bracimaged: uploadedImage.secure_url
        });
        await newbracelet.save();
        res.status(201).json({ message: "Product Added Successfully"});  
    }catch(error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});

//get all bracelet products
router.get("/get_bracelets", async (req, res) => {
    try{
        const bracelets = await braceletModel.find({});
        res.status(200).json(bracelets);
    }catch(error){
        console.lgo(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});

//get single product
router.get("/get_bracelet/:id", async (req, res) => {
    try{
        const bracelet = await braceletModel.findById(req.params.id);
        res.json(bracelet);
    }catch(error){
        console.log(error);
        res.status(500).json({error: "Internal server Error"});
    }
});

//updating bracelet
router.put("/update_bracelet/:id", async(req,res)=>{
    console.log(req.body);
    const { braceletName, braceletDescription, braceletCategory, braceletPrice, braceletDetailDescription }=req.body;
    const { braceletImagea} = req.files;
    if(!braceletName || !braceletDescription || !braceletCategory || !braceletPrice || !braceletDetailDescription){
        return res.status(422).json({error: "Please enter all fields"});
    }

    try{
        if(braceletImagea){
            const uploadedImage = await cloudinary.v2.uploader.upload(
                braceletImagea.path,
                {
                    folder: "enchantia",
                    crop: "scale"
                },
                // braceletImageb.path,
                // {
                //     folder: "enchantia",
                //     crop: "scale"
                // },
                // braceletImagec.path,
                // {
                //     folder: "enchantia",
                //     crop: "scale"
                // },
                // braceletImaged.path,
                // {
                //     folder: "enchantia",
                //     crop: "scale"
                // }
            );

            //update bracelet
            const bracelet = await braceletModel.findById(req.params.id);
                bracelet.bracname = braceletName,
                bracelet.bracdescription = braceletDescription,
                bracelet.braccategory = braceletCategory,
                bracelet.bracprice = braceletPrice,
                bracelet.bracdetaildescription = braceletDetailDescription,
                bracelet.bracimagea = uploadedImage.secure_url,
                // bracelet.bracimageb = uploadedImage.secure_url,
                // bracelet.bracimagec = uploadedImage.secure_url,
                // bracelet.bracimaged = uploadedImage.secure_url
            
            await bracelet.save();

            res.status(201).json({message: "product updated successfully"});
        } else{

            //update bracelet
            const bracelet = await braceletModel.findById(req.params.id)
                bracelet.bracname = braceletName,
                bracelet.bracdescription = braceletDescription,
                bracelet.braccategory = braceletCategory,
                bracelet.bracprice = braceletPrice,
                bracelet.bracdetaildescription = braceletDetailDescription,

                await bracelet.save();
                
                res.status(201).json({ message: "Product updated successfully"});
        }
    }catch(error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});

//delete product
router.delete("/delete_bracelet/:id", authGuard, async (req, res)=>{
    try{
        const bracelet = await braceletModel.findById(req.params.id);
        await bracelet.deleteOne();
        res.status(200).json({message: "Product deleted successfully"});
    } catch(error){
        console.log(error);
        res.status(500).json({ error: "Internal Server Error"});
    }
});

//search bracelet
router.get("/search_bracelet/:braccategory", async(req,res) => {
    try{
        const bracelets = await braceletModel.find({
            braccategory: {
                $regex: req.params.braccategory,
                $options: 'i'
            }
        });
        res.status(200).json(bracelets);
    }catch(error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});

module.exports = router;