const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a user schema
const UserSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Name is required.']
    },
    usertype:{
        type: String,
        required: [true, 'User type is required.']
    },
    age:{
        type: Number,
        default: 18,
    }
    // Add more properties
});

const User = mongoose.model('user', UserSchema);

module.exports = User;