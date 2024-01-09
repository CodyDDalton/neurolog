const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const validateEmail = (email) => {
    return (/^\S+@\S+\.\S+$/).test(email)
}    

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type:String,
        unique: true,
        lowerCase: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Email invalid']
    },
    country: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    settings: {
        type: String,
        requierd: false
    }
})

userSchema.pre('save', function (next) {
    const user = this;
    if(user.isNew || user.isModified('password')) {
        bcrypt.genSalt(10, (error, salt) => {
            if(error) { return next(error)}
            bcrypt.hash(user.password, salt, null, (error,hash) => {
                if(error) {return next(error)}
                user.password = hash;
                next();
            })
        })
    } else {
        next();
    }
})

userSchema.methods.comparePassword = function(candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function(error, isMatch) {
        if(error) {return callback(error), console.log(error)}
        callback(null, isMatch)
    })
}



module.exports = mongoose.model('User', userSchema)