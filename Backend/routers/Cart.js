const { Router } = require("express");
const router = new Router();
const authenticated = require('../middleware/auth');

const { Addcart,Getcart,RemovecartItem } = require("../controllers/Cartcontroller");

router.post("/addItem",authenticated,Addcart);
router.get("/cartlist/:id",authenticated,Getcart);
router.post("/removeItem",RemovecartItem);

module.exports = router;