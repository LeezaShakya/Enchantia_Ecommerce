const express = require('express');
const connectDB = require('./database/Database');
const cors = require('cors');
const cloudinary = require('cloudinary');
const multipart = require('connect-multiparty');

// Dotenv Config
require("dotenv").config();
const app = express();

// express json
app.use(express.json());
app.use(multipart())

// cors config
const corsOptions = {
    origin: true,
    credentials: true,
    optionSuccessStatus: 200
};

cloudinary.config({
    cloud_name: "dlmxnrlqz",
    api_key: "269752196969456",
    api_secret: "KwXRmml6KrP_6hv3EJUa1fVKS7M"
});

app.use(cors(corsOptions));

//  create a route
app.get('/', (req, res) => {
    res.send('Welcome to API');
});

// middleware for user controller
app.use('/api/user', require('./controllers/userControllers'));
// middleware for product controller
app.use('/api/product', require('./controllers/productControllers'));
//middleware for order controller
app.use('/api/orders', require('./controllers/orderController'));
//middleware for necklace controller
app.use('/api/necklace', require('./controllers/necklaceControllers'));
//middleware for bracelet controller
app.use('/api/bracelet',require('./controllers/braceletControllers'));
//middleware for ring controller
app.use('/api/ring', require('./controllers/ringControllers'));
//middleware for earing controller
app.use('/api/earing', require('./controllers/earingControllers'));


// connect to database
connectDB();

// listen to the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});



