const { Router } = require("express");
const router = new Router();
const authenticated = require('../middleware/auth');

const { Addcart,Getcart,RemovecartItem } = require("../controllers/Cartcontroller");

router.post("/addItem",Addcart);
router.get("/cartlist/:id",Getcart);
router.post("/removeItem",RemovecartItem);

module.exports = router;