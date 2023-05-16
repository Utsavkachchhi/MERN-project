const cartModel = require("../model/Cart");

const Addcart = async (req, res) => {
  try {
    const { customer, product, product_quantity } = req.body;

    if (!customer) {
      return res.status(400).send('customer is required');
    }

    let cart = await cartModel.findOne({ customer: req.body.customer });
     console.log("cart",cart);
    if (!cart) {
      // Cart doesn't exist for this customer, create a new one
      cart = new cartModel({
        customer,
        product_quantity,
         product
      });
    } else {
      // Cart exists for this customer, update the product if it already exists, otherwise add it to the cart
      console.log("cart p",cart.product);
      console.log("req",req.body);
      const existingProduct = cart.product.find(p => p._id === product._id);
      console.log("existingProduct",existingProduct);
      if (existingProduct) {
        existingProduct.product_quantity = product_quantity;
      } else {
        cart.product.push({ product, product_quantity });
      }
    }

    await cart.save();
    return res.json(cart);
  } catch (error) {
    console.log('error', error);
    return res.status(500).send('Internal Server Error');
  }
};




const Getcart = async(req,res) => {
    try{
    let cart_data = await cartModel.find({customer:req.params.id,_is_deleted:0})
    return res.status(200).send({ message: 'Cart data retrieved successfully', data: cart_data });
  }
    catch(error){
        console.log("error",error);
    }
}

// const Updatecart = async(req,res) => {
//     try{

//     }
//     catch(error){
//         console.log("error",error);
//     }
// }

const Deletecart = async(req,res) => {
    try{

    }
    catch(error){
        console.log("error",error);
    }
}


module.exports = { Addcart, Getcart, Deletecart  };



