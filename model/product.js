const mongoose = require('mongoose')
const {Schema} = mongoose;

// Schema
const productSchema = new Schema({
    title: {type:String,required:true}, // String is shorthand for {type: String}
    description: {type:String,required:true},
    price: {type:Number,min:[0,'wrong price'],required:true},
    discountPercentage:{type:Number,min:[0,'wrong rating'],max:[50,'wrong rating'],default:0},
    rating: {type:Number,min:[0,'wrong rating'],max:[5,'wrong rating']},
    brand: {type:String,required:true},
    category:{type:String,required:true},
    thumbnail:{type:String,required:true},
    images:[String],
  });
  // first parameter will be name set in db
exports.Product = mongoose.model('Product', productSchema);