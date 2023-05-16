const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({

    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
     
    product_quantity : {
        type:Number,
        required: true
    }, 

      product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
      },

      product_price : {
        type:Number,
        required: true
      },

      product_image : {
        type:String
      },

    is_deleted: {
        type: Number,
        min:0,
        max:1,
        default:0
    }
    

  });


  
  
  //collection
  
  const Cart = new mongoose.model("Cart", cartSchema);
  
  module.exports = Cart;