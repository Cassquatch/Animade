const mongoose = require("mongoose");

const Schema = mongoose.Schema();

const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: "Must enter a username"
    },

    password: {
        type: String,
        trim: true,
        required: "Must enter a password"
        //set up some type of length verification here maybe
        //still need to figure out how to hash password
    },

    //maybe add email verification and such here, unsure yet
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
