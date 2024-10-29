const mongoose = require('mongoose');
const connectDB = () => {
    //mongoose connection
mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("DB CONNECTED" + process.env.DB_URL);
});
};

//create a route
module.exports = connectDB