const { Schema, model } = require('mongoose');

// schema to create User model
const userSchema = new Schema(
    {
        username: { type: String, 
            required: true, 
            unique: true, 
            trim: true 
        },
        email: { 
            type: String, 
            required: true, 
            unique: true, 
            match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ 
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'thought'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'user'
        }]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// virtual for number of friends a user has
userSchema
    .virtual('friendCount')
    .get(function () {
        return this.friends.length;
    });

const User = model('user', userSchema);

module.exports = User; 