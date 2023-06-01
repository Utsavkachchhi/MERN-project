import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
import axios from "axios";
import {
  selectedProducts,
  removeSelectedProduct,
  addCart,
  removeitemCart,
} from "../redux/actions/productsActions";
import { Rating, Typography, Button, Grid } from "@mui/material";

const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { _id, image, title, price, category, description, rating } = product;
  const dispatch = useDispatch();
  const [hide, setHide] = useState(true);
  const carts = useSelector((state) => state.handleCart);
  const customer = useSelector((state) => state?.auths?.auths?.data?.data?.id);
  const [loggedIn, setLoggedIn] = useState(false);
  const [rate, setRate] = useState(0);


  console.log("crats",carts?.cart);
  console.log("product",product);
  console.log("compare",carts?.cart?.map((element) => element?.product._id === product._id));
  

  useEffect(() => {
    const cartItemExists = carts?.cart?.some(element => element.product._id === product._id);
    setHide(cartItemExists);
  }, [carts, product._id]);

  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`http://localhost:8080/api/product/${id}`)
      .catch((error) => {
        // console.log("error", error);
      });
    dispatch(selectedProducts(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
 

  const addProduct = async (product) => {
    let payload = {
      customer:customer,
      product:product,
      product_quantity: 1
    }
    console.log("payload",payload);
    await axios.post("http://localhost:8080/api/cart/addItem", {
      customer:customer,
      product:product,
      product_quantity: 1
 
     });
     
    //  // getCartData();
       dispatch(addCart(payload))
  };

  const removetocart = async (carts) => {
    // await axios.post("http://localhost:8080/api/cart/removeItem", {
    //   customer:customer,
    //   product:carts.product,
    //   product_quantity: 1
    //  });
    //  dispatch(delCart(carts));
    dispatch(removeitemCart(carts));
  };

  const [value, setValue] = React.useState("");

  useEffect(() => {
    if (localStorage.getItem("mytoken")) {
      setLoggedIn(true);
    }
  }, localStorage.getItem("mytoken"));

  useEffect(() => {
    setValue(rating?.rate);
  });

  // console.log("value ", value);

  return (
    <>
      {productId != undefined ? (
        <>
          <Grid
            container
            spacing={{ xs: 0, md: 0 }}
            columns={{ xs: 12, sm: 12, md: 12 }}
          >
            <Grid item xs={5} sm={5} md={5}>
              <div>
                {Object.keys(product).length === 0 ? (
                  <div>...Loading Please Wait</div>
                ) : (
                  <div style={{ marginTop: "20px" }}>
                    <img src={image} height="200px" width="150px" />
                  </div>
                )}
              </div>
            </Grid>

            <Grid item xs={7} sm={7} md={7}>
              <div style={{ marginTop: "20px", textAlign: "left" }}>
                <Typography
                  variant="h4"
                  component="div"
                  style={{
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    color: "#777",
                  }}
                >
                  {category}
                </Typography>

                <Typography
                  variant="h3"
                  component="div"
                  style={{ marginTop: "10px" }}
                >
                  {title}
                </Typography>

                <Typography>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    precision={0.1}
                    readOnly
                  />
                </Typography>

                <Typography
                  variant="h4"
                  component="div"
                  style={{ marginTop: "10px" }}
                >
                  ${price}
                </Typography>

                <Typography
                  variant="h5"
                  component="div"
                  style={{ marginTop: "10px" }}
                >
                  {description}
                </Typography>
              </div>

              <div style={{ marginTop: "10px" }}>
                <Button
                  variant="contained"
                  color="success"
                  size="large"
                  onClick={() => addProduct(product)}
                >
                  Add to cart
                </Button>

             

        {loggedIn ? (
        hide ? (
          <Link to="/cart">
            <Button
              variant="contained"
              color="secondary"
              size="large"
              style={{ marginLeft: "15px" }}
            >
              Go to cart
            </Button>
          </Link>
        ) : null
      ) : (
        <Link to="/">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ marginLeft: "15px" }}
          >
            Go to cart
          </Button>
        </Link>
      )}

            {hide && (
              <Button
                variant="contained"
                size="large"
                style={{ marginLeft: "15px" }}
                onClick={() => removetocart(product)}
              >
                Remove from cart
              </Button>
            )}
              </div>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <div>data is not found !</div>
        </>
      )}
    </>
  );
};

export default ProductDetails;
