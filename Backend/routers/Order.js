const { Router } = require("express");
const router = new Router();

const { createOrder } = require("../controllers/Ordercontroller");

router.post("/createOrder", createOrder);

module.exports = router;