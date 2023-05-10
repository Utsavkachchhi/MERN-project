const express = require("express");
require("./config/Conn");

const cors = require("cors");
const Product = require("./routers/product");
const User = require("./routers/user");
const Feedback = require("./routers/Feedback");
const Order = require("./routers/Order");
const Cart = require("./routers/Cart");
const app = express();

app.use("/public/uploads", express.static(__dirname + "/public/uploads")); // image view

var options = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(options));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/api/product", Product);
app.use("/api/user", User);
app.use("/api/feedback", Feedback);
app.use("/api/cart",Cart)
app.use("/api/order",Order);

app.listen(8080);
