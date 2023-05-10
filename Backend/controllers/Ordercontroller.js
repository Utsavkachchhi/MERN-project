const order = require("../model/Order");


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


  


module.exports = {createOrder}