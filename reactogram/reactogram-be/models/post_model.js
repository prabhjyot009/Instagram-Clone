const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    likes: [{
        type: ObjectId,
        ref: "UserModel"
    }],
    comments: [{
        commentText: String,
        commentedBy: { type: ObjectId, ref: "UserModel" }
    }],
    image: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel"
    }
});

mongoose.model("PostModel", postSchema);