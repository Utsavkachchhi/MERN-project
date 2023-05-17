const mongoose = require("mongoose");
const Productmodel = require('./Productmodel')
const cartSchema = new mongoose.Schema({

    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      cart:[
        {
          quantity:Number,
          product: Object,
        }
      ],
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