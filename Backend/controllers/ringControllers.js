const authGuard = require("../auth/authGuard");
const ringModel = require("../models/ringModel");
const cloudinary = require("cloudinary");
const router = require("express").Router();

router.post("/add", authGuard, async(req,res) => {
    console.log(req.body);
    const { ringName, ringDescription, ringCategory, ringPrice, ringDetailDescription } = req.body;
    const { ringImagea } = req.files;
    if(!ringName || !ringDescription || !ringCategory || !ringPrice || !ringDetailDescription){
        return res.status(422).json({error: "Please enter all fields"});
    }

const uploadedImage = await cloudinary.v2.uploader.upload(
    ringImagea.path,
    {
        folder: "enchantia",
        crop: "scale"
    },
    // ringImageb.path,
    // {
    //     folder: "enchantia",
    //     crop: "scale"
    // },
    // ringImagec.path,
    // {
    //     folder: "enchantia",
    //     crop: "scale"
    // },
    // ringImaged.path,
    // {
    //     folder: "enchantia",
    //     crop: "scale"
    // },

);
    try{
        const newring = new ringModel({
            ringname: ringName,
            ringdescription: ringDescription,
            ringcategory: ringCategory,
            ringprice: ringPrice,
            ringdetaildescription: ringDetailDescription,
            ringimagea: uploadedImage.secure_url,
            // ringimageb: uploadedImage.secure_url,
            // ringimagec: uploadedImage.secure_url,
            // ringimaged: uploadedImage.secure_url
        });
        await newring.save();
        res.status(201).json({ message: "Product Added Successfully"});  
    }catch(error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});

//get all ring products
router.get("/get_rings", async (req, res) => {
    try{
        const rings = await ringModel.find({});
        res.status(200).json(rings);
    }catch(error){
        console.lgo(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});

//get single product
router.get("/get_ring/:id", async (req, res) => {
    try{
        const ring = await ringModel.findById(req.params.id);
        res.json(ring);
    }catch(error){
        console.log(error);
        res.status(500).json({error: "Internal server Error"});
    }
});

//updating ring
router.put("/update_ring/:id", async(req,res)=>{
    console.log(req.body);
    const { ringName, ringDescription, ringCategory, ringPrice, ringDetailDescription }=req.body;
    const { ringImagea} = req.files;
    if(!ringName || !ringDescription || !ringCategory || !ringPrice || !ringDetailDescription){
        return res.status(422).json({error: "Please enter all fields"});
    }

    try{
        if(ringImagea){
            const uploadedImage = await cloudinary.v2.uploader.upload(
                ringImagea.path,
                {
                    folder: "enchantia",
                    crop: "scale"
                },
                // ringImageb.path,
                // {
                //     folder: "enchantia",
                //     crop: "scale"
                // },
                // ringImagec.path,
                // {
                //     folder: "enchantia",
                //     crop: "scale"
                // },
                // ringImaged.path,
                // {
                //     folder: "enchantia",
                //     crop: "scale"
                // }
            );

            //update ring
            const ring = await ringModel.findById(req.params.id);
                ring.ringname = ringName,
                ring.ringdescription = ringDescription,
                ring.ringcategory = ringCategory,
                ring.ringprice = ringPrice,
                ring.ringdetaildescription = ringDetailDescription,
                ring.ringimagea = uploadedImage.secure_url,
                // ring.ringimageb = uploadedImage.secure_url,
                // ring.ringimagec = uploadedImage.secure_url,
                // ring.ringimaged = uploadedImage.secure_url
            
            await ring.save();

            res.status(201).json({message: "product updated successfully"});
        } else{

            //update ring
            const ring = await ringModel.findById(req.params.id)
                ring.ringname = ringName,
                ring.ringdescription = ringDescription,
                ring.ringcategory = ringCategory,
                ring.ringprice = ringPrice,
                ring.ringdetaildescription = ringDetailDescription,

                await ring.save();
                
                res.status(201).json({ message: "Product updated successfully"});
        }
    }catch(error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});

//delete product
router.delete("/delete_ring/:id", authGuard, async (req, res)=>{
    try{
        const ring = await ringModel.findById(req.params.id);
        await ring.deleteOne();
        res.status(200).json({message: "Product deleted successfully"});
    } catch(error){
        console.log(error);
        res.status(500).json({ error: "Internal Server Error"});
    }
});

//search earing
router.get("/search_ring/:ringcategory", async(req,res) => {
    try{
        const rings = await ringModel.find({
            ringcategory: {
                $regex: req.params.ringcategory,
                $options: 'i'
            }
        });
        res.status(200).json(rings);
    }catch(error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});

module.exports = router;