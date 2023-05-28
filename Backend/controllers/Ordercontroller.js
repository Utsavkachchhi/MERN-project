const order = require("../model/Order");

//place order
const createOrder = async(req,res) => {
    try{
       let orders = new order(req.body)
       let order_data = await orders.save();
       return res.status(200).send(order_data)
    }
    catch(error){
        console.log("error",error)
    }
}


//customer wise order list 
const GetOrderByCustomer = async(req,res) => {
    try{
     let customer_order = await order.find({customer:req.params.id})
     res.status(200).send({
        success: true,
        message: 'Register successful!',
        data: {order:customer_order}
        
      });
    }
    catch(error){
        console.log("error",error);
    }
}

  


module.exports = {createOrder,GetOrderByCustomer}