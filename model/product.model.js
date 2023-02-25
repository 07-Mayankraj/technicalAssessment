const mongoose  = require('mongoose');

const productSchema = mongoose.Schema({

    id:String,    
    name: String,
    description: String,
    price : Number

})

const ProductModel = mongoose.model('Product',productSchema)

module.exports = {ProductModel};