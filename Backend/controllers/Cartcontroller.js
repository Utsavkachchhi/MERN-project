const cartModel = require("../model/Cart");

const Addcart = async (req, res) => {
  try {
    const { customer, product, product_quantity } = req.body;

    if (!customer) {
      return res.status(400).send('customer is required');
    }

    let cart = await cartModel.findOne({ customer: req.body.customer });
    //  console.log("cart",cart);
    if (!cart) {
      // Cart doesn't exist for this customer, create a new one
      cart = new cartModel({
        customer,
        cart:[{quantity: product_quantity, product:product}],
      });
    } else {
      const existingProduct = cart.cart.find(p => p.product._id === product._id);
      if (existingProduct) {
        cart.cart = cart.cart.map(item => {
          let newItem = item;
          if(item.product._id === product._id){
            newItem = {...newItem, quantity: newItem.quantity + product_quantity}
          }
          return {...newItem}
        })
        
      } else {
        cart.cart = [...cart.cart, {quantity: product_quantity, product: product}]
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
    let cart_data = await cartModel.findOne({customer:req.params.id,_is_deleted:0})
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



