const mongoose = require("mongoose")
const dotenv = require("dotenv");
dotenv.config();
const URL = process.env.MONGO_URL;
const dbConnect = async () => {
    try {
        await mongoose.connect(URL)
        console.log("mongo connected");


    }
    catch (err) {
        console.log("error");

    }
}
module.exports = dbConnect;