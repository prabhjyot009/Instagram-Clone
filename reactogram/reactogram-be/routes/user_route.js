const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const UserModel = mongoose.model("UserModel");

router.post("/signup", (req, res) => {
    const { fullName, email, password, profileImg } = req.body;
    if (!fullName || !email || !password) {
        return res.status(400).json({ error: "Please add all the fields." });
    }
    UserModel.findOne({ email: email })
        .then((userFoundInDB) => {
            if (userFoundInDB) {
                return res.status(400).json({ error: "User already exists." });
            } 
        })
        .catch((err) => {
            console.log(err);
        })
});

module.exports = router;