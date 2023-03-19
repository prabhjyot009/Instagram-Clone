const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const PostModel = mongoose.model("PostModel");
const protectedRoute = require('../middleware/protectedResource');

router.get('/allposts', (req, res) => {
    PostModel.find()
        .populate("author", "_id fullName profileImg")
        .then((dbPosts) => {
            res.status(200).json({posts: dbPosts});
        })
        .catch((error) => {
            console.log(error);
        })
});

router.get('/myallposts', protectedRoute,(req, res) => {
    PostModel.find({author: req.user._id})
        .populate("author", "_id fullName profileImg")
        .then((dbPosts) => {
            res.status(200).json({posts: dbPosts});
        })
        .catch((error) => {
            console.log(error);
        })
});

router.post('/createpost', protectedRoute, (req, res) => {
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

router.delete("/deletepost/:postId", protectedRoute, (req, res) => {
    PostModel.findOne({ _id: req.params.postId })
        .populate("author", "_id")
        .exec((error, postFound) => {
            if (error || !postFound) {
                return res.status(400).json({ error: "Post does not exist" });
            }
            //check if the post author is same as loggedin user only then allow deletion
            if (postFound.author._id.toString() === req.user._id.toString()) {
                postFound.remove()
                    .then((data) => {
                        res.status(200).json({ result: data });
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        })
});

module.exports = router;