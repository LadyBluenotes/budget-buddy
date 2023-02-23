const mongoose = require('mongoose')
const { isEmail } = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name']
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        validator: {
            validator: isEmail,
            message: props => `${props.value} is not a valid email.`
        }
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        validate: {
            validator: function (v) {
                return v.length >= 6;
            },
            message: `Password must be six characters long.`
        }
    }
});

module.exports = mongoose.model('User', userSchema);