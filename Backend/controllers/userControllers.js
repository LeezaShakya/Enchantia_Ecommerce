const router = require("express").Router();
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// bcrypt
const bcrypt = require("bcrypt");

// ceate a test route
router.get("/test", (req, res) => {
  res.send("Welcome to user API");
});

//create a route for user registration
router.post("/register", async (req, res) => {
  console.log(req.body);

  const { fname, lname, email, password } = req.body;
  const { image } = req.files;
  if (!fname || !lname || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  const uploadedImage = await cloudinary.v2.uploader.upload(
    image.path,
    {
        folder: "enchantia",
        crop: "scale"
    },
  );
  try {
    //checking existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }
    //hash the password
    const salt = await bcrypt.genSaltSync(10);
    const passwordHash = await bcrypt.hashSync(password, salt);

    //create a new user
    const newUser = new User({
      fname: fname,
      lname: lname,
      email: email,
      password: passwordHash,
      image: uploadedImage.secure_url
    });

    //save the user
    newUser.save();
    res.json("User registered successfully");
  } catch (error) {
    res.status(500).json("User registration failed");
  }
});

//create a route for user login
router.post("/login", async(req, res) => {
  console.log(req.body);

  const { email, password} = req.body;

  //validation
  if( !email || !password ){
    return res.status(400).json({msg: "Please enter all fields"});
  }
  try{
    const user = await User.findOne({email});
    console.log(user);

    //check if user exists
    if(!user){
     return res.json({msg: "User doesnot exist"});
    }

    //check if password is correct
    const isCorrectPassword = await bcrypt.compare(password, user.password)
    if(!isCorrectPassword){
      res.status(400).json({ msg: "Invalid Credentials"});
    }
    //creating a token and signin it with jwt
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);

    //send the token in a HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + 24*60*60*1000)

    })

    //SEND USER DATA
    res.json({
      token, 
      user,
      msg: "User logged in successfully"
    });

  }catch(error){
    console.log(error);
  }
});

//create route for saving or updating
router.post("/update_profile", async(req, res) => {
  console.log(req.body);

  const { fname, lname } = req.body;
  const { image } = req.files;
  
  const uploadedImage = await cloudinary.v2.uploader.upload(
    image.path,
    {
      folder: "enchantia",
      crop: "scale"
    },
  );
  try{
    const updateUser = new User({
      fname: fname,
      lname: lname,
      image: uploadedImage.secure_url
    });
    updateUser.save();
    res.json("Profile Update successful");
  } catch (error) {
    res.status(500).json("Profile Update failed");
  }
})

module.exports = router;
