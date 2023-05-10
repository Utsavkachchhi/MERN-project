const cartModel = require("../model/Cart");

const Addcart = async (req, res) => {
  try {
    const { customer, product, product_quantity } = req.body;

    // Check if required fields are present
    if (!customer || !product || !product_quantity) {
      return res.status(400).send('Customer, product, and product quantity are required');
    }

    // Create a new cart item using the request body
    const cartItem = new cartModel({
      customer,
      product_quantity,
      product
    });

    // Save the cart item to the database
    const savedCartItem = await cartItem.save();

    // Send a success response with the saved cart item
    res.status(201).json(savedCartItem);
  } catch (error) {
    console.log('Error:', error);
    res.status(500).send('Internal server error');
  }
};



const Getcart = async(req,res) => {
    try{
    let cart_data = await cartModel.find({customer:req.params.id,_is_deleted:0})
    return  await res.status(200).send(cart_data,'cart data retrieve successfully');
    }
    catch(error){
        console.log("error",error);
    }
}

const Updatecart = async(req,res) => {
    try{

    }
    catch(error){
        console.log("error",error);
    }
}

const Deletecart = async(req,res) => {
    try{

    }
    catch(error){
        console.log("error",error);
    }
}


module.exports = { Addcart, Getcart, Updatecart, Deletecart  };



