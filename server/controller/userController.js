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
        const updateuser = User.findOneAndUpdate({ email }, { name }, { new: true })
        res.status(200).json({ message: "user updated" })



    }
    catch (err) {
        console.log(err);

    }



}
const deleteUser = async (req, res) => {
    try {
        const email = req.params.email;
        const deleteResult = await User.deleteOne({ email });

        if (deleteResult.deletedCount > 0) {
            res.status(200).json({ message: "User deleted" });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
};
module.exports = { getAllUsers, getUser, createUser, updateUser, deleteUser }