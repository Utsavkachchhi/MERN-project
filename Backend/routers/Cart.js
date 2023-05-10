const { Router } = require("express");
const router = new Router();

const { Addcart } = require("../controllers/Cartcontroller");

router.post("/addItem", Addcart);

module.exports = router;