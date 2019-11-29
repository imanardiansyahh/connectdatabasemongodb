const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    address: {
        street: String,
        city: String,
        postalcode: Number
    },
    hobbies: [String]
})

const User = mongoose.model('User', UserSchema)

module.exports = User;