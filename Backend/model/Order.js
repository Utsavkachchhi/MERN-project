const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
 
     product:{
        type: [JSON]
      },

      total_quantity:{
        type:Number
     },
      
      total_price: {
        type:Number
      },

      is_deleted: {
        type: Number,
        min:0,
        max:1,
        default:0
    }
    

  });


  
  
  //collection
  
  const Order = new mongoose.model("Order", orderSchema);
  
  module.exports = Order;