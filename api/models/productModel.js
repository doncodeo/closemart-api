const mongoose = require('mongoose'),
Schema=mongoose.Schema;

const ProductSchema = mongoose.Schema({ 
    title: {
        type:String,
        required:true,
        trim:true
    },
    product_id:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required: true
    },
    sold: {
        type: Number,
        required:false
    },
    checked: {
        type: Boolean,
        required:false
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    images: {
        type: Object,
        required: true
    }
}, {
    timestamps:true
})

let Product = mongoose.model('product', ProductSchema)
module.exports = Product