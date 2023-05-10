import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterproductbycategory,
  setProducts,
} from "../redux/actions/productsActions";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  Button,
  List,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import { Link } from "react-router-dom";

const Product = () => {
  const [state, setState] = useState([
    {
      id: 1,
      name: "Men",
      value: "men's clothing",
      checked: false,
    },
    {
      id: 2,
      name: "Women",
      value: "women's clothing",
      checked: false,
    },
    {
      id: 3,
      name: "Jewelery",
      value: "jewelery",
      checked: false,
    },
    {
      id: 4,
      name: "Electronics",
      value: "electronics",
      checked: false,
    },
  ]);

  const filterdata = useSelector(
    (state) => state.allProducts.filteredItemsByCategory
  );

  const allProducts = useSelector((state) => state.allProducts.products);
  const [product, setProduct] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/product")
      .then(
        (response) => (
          setProduct(response.data),
          dispatch(filterproductbycategory(response.data))
        )
      )
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  const handleChange = (e, id) => {
    let myArr = [...state];
    myArr[id].checked = !myArr[id].checked;
    setState(myArr);

    if (!state.some((data) => data.checked === true)) {
      dispatch(filterproductbycategory(product));
    } else {
      const newARR = state
        .filter((myitem) => myitem.checked === true)
        .map((myitem) => myitem.value);
      dispatch(filterproductbycategory(product, newARR));
    }
  };
  const renderList = filterdata?.map((value, i) => {
    const { _id, title, image, price, category } = value;

    return (
      // <div>
      <Grid item xs={1} sm={4} md={4} key={i}>
        <Link to={`/product/${_id}`}>
          <Card style={{ minHeight: "300px" }}>
            <Typography variant="h5" component="div">
              <img
                src={image}
                alt={title}
                height="100px"
                width="140px"
                style={{ maxHeight: "100px" }}
              />
            </Typography>
            {/* <p>{title}</p> */}
            <CardHeader title={title} />
            <CardContent>
              <Typography variant="h4" gutterBottom>
                ${price}
              </Typography>
              <Typography variant="h5" gutterBottom>
                {category}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
      // </div>
    );
  });
  return (
    <>
      <div>
        {state.map((data, index) => (
          <div>
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox />}
                name={data.name}
                value={data.value}
                id={data.id}
                label={data.name}
                style={{ marginLeft: "0px" }}
                checked={data.checked}
                onChange={(e) => handleChange(e, index)}
              />
            </FormGroup>
          </div>
        ))}

        {/* <div style={{ textAlign: "right", paddingRight: "100px" }}>
          <Button
            variant="contained"
            color="success"
            size="large"
            onClick={() => mysorting(allProducts)}
          >
            Sort
          </Button>
        </div> */}

        <Grid
          container
          spacing={{ xs: 1, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {renderList}
        </Grid>
      </div>
    </>
  );
};

export default Product;
