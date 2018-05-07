const mongoose = require('mongoose');
const { Schema } = mongoose;

const validate = require('mongoose-validator');

const uniqueValidator = require('mongoose-unique-validator');



const bcrypt = require('bcrypt-as-promised');

// Create Schemas for models
const userSchema = new Schema(
    {
        first_name: {
            type: String,
            trim: true,
            required: [true, 'First name is required'],
        },
        
        last_name: {
            type: String,
            trim: true,
            required: [true, 'Last name is required'],
        },
        
        email: {
            type: String,
            required: [true, 'Email address is required'],
            trim: true,
            lowercase: true,
            unique: [true],
            validate: {
                validator: function(value) {
                    return (/^([^@\s]+)@((?:[-a-z0-9]+.)+[a-z]{2,})$/i).test( value )
                },
                message: 'Please provide a valid email address'
            }
        },
        
        password: {
            type: String,
            trim: true,
            required: [true, 'Password is required'],
            minlength: [8, 'Password length must be at least 8 characters'],
        },
        
        birthdate: {
            type: Date,
            required: [true, 'Birth date is required'],
        }
    },
    
    {
        timestamps: true,
    }
);

// this plugin makes uniqueness validation error throw an error and allows custom error message
userSchema.plugin(uniqueValidator, { message: '{PATH} is already in use -- it must be unique' });



//add hashing method for password whenever it is modified
userSchema.pre('save', function(next) {
    console.log(' in userSchema.pre save -- password:', this.password)

    //if password has not been modified, carry on
    if ( !this.isModified('password')) return next();
    
    //if it has, encrypt it (with salt rounds =10)
    bcrypt.hash(this.password, 10)
        .then( hash => {
            console.log('hashing succesful with hash =', hash)
            this.password = hash;
            next();
        })
        .catch(error => {
            console.log(error);
            next(error);
        })
});

userSchema.statics.verifyPassword = function(candidatePassword, currentPasswordHash) {
    return bcrypt.compare(candidatePassword, currentPasswordHash);
};



module.exports = mongoose.model('User', userSchema);