const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const PostModel = mongoose.model("PostModel");
const protectedRoute = require('../middleware/protectedResource');

router.get('/createpost', protectedRoute, (req, res) => {
    const {description, location, image} = req.body;
    if (!description || !location || !image) {
        return res.status(400).json({error: "One or more fields mandatory fields are empty."});
    }
    req.user.password = undefined;
    const postObj = new PostModel({description: description,location: location,image: image,author: req.user});
    postObj.save()
        .then((newPost)=>{
            res.status(201).json({post: newPost});
        })
        .catch((error)=>{
            console.log(error);
        })
});

module.exports = router;