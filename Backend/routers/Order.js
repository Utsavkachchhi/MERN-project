const { Router } = require("express");
const router = new Router();

const { createOrder,GetOrderByCustomer } = require("../controllers/Ordercontroller");

router.post("/placeOrder", createOrder);
router.get("/customerOrder/:id",GetOrderByCustomer)
module.exports = router;