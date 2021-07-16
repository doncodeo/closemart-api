const mongoose = require('mongoose'),
Schema=mongoose.Schema;

const UserSchema = mongoose.Schema({ 
    username: {
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required: true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:Number,
        default:0
    },
    cart: {
        type: Array,
        default: []
    },
}, {
    timestamps:true
})

let User = mongoose.model('user', UserSchema)
module.exports = User