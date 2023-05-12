const { Router } = require("express");
const router = new Router();

const { Addcart,Getcart } = require("../controllers/Cartcontroller");

router.post("/addItem", Addcart);
router.get("/cartlist/:id",Getcart)

module.exports = router;