const monsooge = require('mongoose');
const Schema = monsooge.Schema;

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
        required: [true, 'Age is required.']
    }
    // Add more properties
});

const User = monsooge.model('user', UserSchema);

module.exports = User;