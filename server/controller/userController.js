const User = require("../model/userModel")
const getAllUsers = async (req, res) => {
    try {
        const user = await User.find()
        res.status(200).json(user)
    }
    catch (err) {
        console.log("error in getAllusers");


    }
}
const getUser = async (req, res) => {
    try {
        const email = req.params.email;
        const user = await User.findOne({ email })
        res.status(200).json(user)
    }
    catch (error) {
        console.log(error);

    }
}
const createUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const newUser = new User({ name, email, password, role })
        const user = await newUser.save()
        res.status(200).json(user)

    }
    catch (error) {
        console.log(error);

    }
}
const updateUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const updateuser = User.findOneAndUpdate({ email }, { name, password, role }, { new: true })
        res.status(200).json(updateuser)



    }
    catch (err) {
        console.log(err);

    }



}
const deleteUser = async (req, res) => {
    try {
        const email = req.params.email;
        const deleteUser = User.deleteOne({ email })
        res.status(200).json(deleteUser);
    }
    catch (err) {
        console.log(err);

    }
}
module.exports = { getAllUsers, getUser, createUser, updateUser, deleteUser }