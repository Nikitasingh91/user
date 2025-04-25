const express = require("express")
const app = express()
const dotenv = require("dotenv")
const dbConnect = require("./config/db")
const userroute = require("./routes/userRoutes")
const cors = require("cors")
dotenv.config()
const Port = process.env.PORT || 300
dbConnect()
app.use(cors())

app.use(express.json())
app.use("/", userroute)
app.listen(Port, () => {
    console.log("server created", Port);


})