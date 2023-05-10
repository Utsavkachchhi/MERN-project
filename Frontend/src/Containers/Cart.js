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
import { addCart, delCart } from "../redux/actions/productsActions";
import Cartimage from "../assets/cart.jpeg";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const carts = useSelector((state) => state.handleCart);
  console.log("carts",carts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleclick = (carts) => {
    dispatch(addCart(carts));
  };
  const handleclick2 = (carts) => {
    dispatch(delCart(carts));
  };
  const handleclick3 = () => {
   navigate("/product");
  };
  const handleSubmitOrder = () => {

  }

  return (
    <div>
      <h1 style={{ margin: "10px" }}>My Cart</h1>
      <div>
        <Grid>
          {carts.map((cartsitem) => (
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
                  image={cartsitem.image}
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
                    {cartsitem.title}
                  </Typography>
                  <Typography variant="h5" color="text.secondary">
                    {cartsitem.qty} * ${cartsitem.price} = $
                    {cartsitem.qty * cartsitem.price}
                  </Typography>
                  <Typography variant="h5" color="text.secondary">
                    <AddIcon onClick={() => handleclick(cartsitem)} />
                    <RemoveIcon onClick={() => handleclick2(cartsitem)} />
                  </Typography>
                  <Typography>
                  <Button variant="contained" onClick={() => handleSubmitOrder()}>Place order</Button>

                  </Typography>
                </CardContent>
              </div>
            </Card>
          ))}
        </Grid>
      </div>

      {/* empty cart ui */}
      {carts.length === 0 && (
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