import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { addCart, clearProductFromCart, delCart,getCartItem,placeOrder } from "../redux/actions/productsActions";
import Cartimage from "../assets/cart.jpeg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const carts = useSelector((state) => state.handleCart);
  const customer = useSelector((state) => state?.auths?.auths?.data?.data?.id);
    useEffect(() =>{
 
    })
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleclick = async (carts) => {
    await axios.post("http://localhost:8080/api/cart/addItem", {
     customer:customer,
     product:carts.product,
     product_quantity: 1

    });
    
    // getCartData();
      dispatch(addCart(carts))
  }
  const handleclick2 = async(carts) => {
    await axios.post("http://localhost:8080/api/cart/removeItem", {
     customer:customer,
     product:carts.product,
     product_quantity: 1
    });
    dispatch(delCart(carts));
  };

  const updateCartQuantity = async (carts, newQuantity) => {
    await axios.post("http://localhost:8080/api/cart/addItem", {
      customer: customer,
      product: carts.product,
      product_quantity: newQuantity,
    });
  };
  
  const handleclick3 = () => {
   navigate("/product");
  };

  const handleSubmitOrder = async (carts) => {
    await axios.post("http://localhost:8080/api/order/placeOrder", {
      customer: customer,
      product: carts.product,
      total_price: carts.product.price * carts.quantity ,
      total_quantity : carts.quantity
    });

    dispatch(placeOrder(carts.cart));
    dispatch(clearProductFromCart(carts?.product._id));

  }
  const getCartData = async () => {
    await axios.get(`http://localhost:8080/api/cart/cartlist/${customer}`)
    .then(response => {
     dispatch(getCartItem(response.data.data))
    })
    .catch(error =>{
      console.log("error",error);
    })
  };

  useEffect(() => {
    getCartData();
  }, []);

  return (
    <div>
      <h1 style={{ margin: "10px" }}>My Cart</h1>
      <div>
        <Grid>
          {carts?.cart?.map((cartsitem) => (
            <Card sx={{ maxWidth: 850, margin: "10px auto" }}>
              <div
                style={{
                  width: "25%",
                  display: "inline-block",
                  padding: "10px",
                }}
              >
                <CardMedia
                  component="img"
                  // height="100px"
                  style={{ width: "100px" }}
                  image={cartsitem?.product?.image}
                  alt="green iguana"
                />
              </div>

              <div
                style={{
                  width: "74%",
                  display: "inline-block",
                  padding: "10px",
                  verticalAlign: "top",
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    {cartsitem?.product?.title}
                  </Typography>
                  <Typography variant="h5" color="text.secondary">
                    {cartsitem.quantity} * ${cartsitem?.product?.price} = $
                    {cartsitem.quantity * cartsitem?.product?.price}
                  </Typography>
                  <Typography variant="h5" color="text.secondary">
                    <AddIcon onClick={() => handleclick(cartsitem)} />
                    <RemoveIcon onClick={() => handleclick2(cartsitem)} />
                  </Typography>
                  <Typography>
                  <Button variant="contained" onClick={() => handleSubmitOrder(cartsitem)}>Place order</Button>

                  </Typography>
                </CardContent>
              </div>
            </Card>
          ))}
        </Grid>
      </div>

      {/* empty cart ui */}
      {carts?.cart?.length === 0 && (
        <div style={{ margin: "25px", textAlign: "center" }}>
          <div>
            <img src={Cartimage} />
          </div>
          <h2 style={{ fontSize: "14px" }}>Your Cart is Empty</h2>
          <p style={{ marginTop: "10px", fontSize: "12px" }}>
            Looks like you haven't added <br />
            anything to your cart yet
          </p>
          <Button
            color="secondary"
            variant="contained"
            style={{ marginTop: "5px", fontSize: "12px" }}
            onClick={handleclick3}
          >
            Start Shopping
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
