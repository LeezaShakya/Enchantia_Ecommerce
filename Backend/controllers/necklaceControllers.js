const authGuard = require("../auth/authGuard");
const necklaceModel = require("../models/necklaceModel");
const cloudinary = require("cloudinary");
const router = require("express").Router();

router.post("/add", authGuard, async(req,res) => {
    console.log(req.body);
    const { necklaceName, necklaceDescription, necklaceCategory, necklacePrice, necklaceDetailDescription } = req.body;
    const { necklaceImagea } = req.files;
    if(!necklaceName || !necklaceDescription || !necklaceCategory || !necklacePrice || !necklaceDetailDescription){
        return res.status(422).json({error: "Please enter all fields"});
    }

const uploadedImage = await cloudinary.v2.uploader.upload(
    necklaceImagea.path,
    {
        folder: "enchantia",
        crop: "scale"
    },
    // necklaceImageb.path,
    // {
    //     folder: "enchantia",
    //     crop: "scale"
    // },
    // necklaceImagec.path,
    // {
    //     folder: "enchantia",
    //     crop: "scale"
    // },
    // necklaceImaged.path,
    // {
    //     folder: "enchantia",
    //     crop: "scale"
    // },

);
    try{
        const newNecklace = new necklaceModel({
            necname: necklaceName,
            necdescription: necklaceDescription,
            neccategory: necklaceCategory,
            necprice: necklacePrice,
            necdetaildescription: necklaceDetailDescription,
            necimagea: uploadedImage.secure_url,
            // necimageb: uploadedImage.secure_url,
            // necimagec: uploadedImage.secure_url,
            // necimaged: uploadedImage.secure_url
        });
        await newNecklace.save();
        res.status(201).json({ message: "Product Added Successfully"});  
    }catch(error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});

//get all necklace products
router.get("/get_necklaces", async (req, res) => {
    try{
        const necklaces = await necklaceModel.find({});
        res.status(200).json(necklaces);
    }catch(error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});

//get single product
router.get("/get_necklace/:id", async (req, res) => {
    try{
        const necklace = await necklaceModel.findById(req.params.id);
        res.json(necklace);
    }catch(error){
        console.log(error);
        res.status(500).json({error: "Internal server Error"});
    }
});

//updating necklace
router.put("/update_necklace/:id", async(req,res)=>{
    console.log(req.body);
    const { necklaceName, necklaceDescription, necklaceCategory, necklacePrice, necklaceDetailDescription }=req.body;
    const { necklaceImagea} = req.files;
    if(!necklaceName || !necklaceDescription || !necklaceCategory || !necklacePrice ||!necklaceDetailDescription){
        return res.status(422).json({error: "Please enter all fields"});
    }

    try{
        if(necklaceImagea){
            const uploadedImage = await cloudinary.v2.uploader.upload(
                necklaceImagea.path,
                {
                    folder: "enchantia",
                    crop: "scale"
                },
                // necklaceImageb.path,
                // {
                //     folder: "enchantia",
                //     crop: "scale"
                // },
                // necklaceImagec.path,
                // {
                //     folder: "enchantia",
                //     crop: "scale"
                // },
                // necklaceImaged.path,
                // {
                //     folder: "enchantia",
                //     crop: "scale"
                // }
            );

            //update necklace
            const necklace = await necklaceModel.findById(req.params.id);
                necklace.necname = necklaceName,
                necklace.necdescription = necklaceDescription,
                necklace.neccategory = necklaceCategory,
                necklace.necprice = necklacePrice,
                necklace.necdetaildescription = necklaceDetailDescription,
                necklace.necimagea = uploadedImage.secure_url,
                // necklace.necimageb = uploadedImage.secure_url,
                // necklace.necimagec = uploadedImage.secure_url,
                // necklace.necimaged = uploadedImage.secure_url
            
            await necklace.save();

            res.status(201).json({message: "product updated successfully"});
        } else{

            //update necklace
            const necklace = await necklaceModel.findById(req.params.id)
                necklace.necname = necklaceName,
                necklace.necdescription = necklaceDescription,
                necklace.neccategory = necklaceCategory,
                necklace.necprice = necklacePrice,
                necklace.necdetaildescription = necklaceDetailDescription;

                await necklace.save();
                
                res.status(201).json({ message: "Product updated successfully"});
        }
    }catch(error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});

//delete product
router.delete("/delete_necklace/:id", authGuard, async (req, res)=>{
    try{
        const necklace = await necklaceModel.findById(req.params.id);
        await necklace.deleteOne();
        res.status(200).json({message: "Product deleted successfully"});
    } catch(error){
        console.log(error);
        res.status(500).json({ error: "Internal Server Error"});
    }
});

//search necklace
router.get("/search_necklace/:neccategory", async(req,res) => {
    try{
        const necklaces = await necklaceModel.find({
            neccategory: {
                $regex: req.params.neccategory,
                $options: 'i'
            }
        });
        res.status(200).json(necklaces);
    }catch(error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});

module.exports = router;