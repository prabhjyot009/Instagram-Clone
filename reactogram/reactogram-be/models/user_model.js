const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profileImg:{
        type:String,
        default:"https://images.unsplash.com/photo-1624202270738-3b72ae7e5e35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW9uc3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
    }
});

mongoose.model("UserModel",userSchema);