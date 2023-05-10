import { CheckBox } from "@mui/icons-material";
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
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterproductbycategory } from "../redux/actions/productsActions";

const classes = {
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 20,
    textAlign: "center",
    backgroundColor: "black",
    color: "white",
  },
};

const ProductComponent = () => {
  const [tempData, setTempData] = useState([
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics",
  ]);

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
    {
      id: 5,
      name: "All",
      value: "All",
      checked: false,
    },
  ]);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  const [product, setProduct] = useState();

  useEffect(() => {
    console.log("load once");
    if (products) {
      setProduct(products);
    }
  }, []);

  const filterdata = useSelector(
    (state) => state.allProducts.filteredItemsByCategory
  );

  console.log("filterdata", filterdata);
  console.log("product ->", product);
  console.log("products ->", products);

  useEffect(() => {
    console.log("products in useEffect", products);

    dispatch(filterproductbycategory(product));
  }, []);

  useEffect(() => {
    console.log("filterdata");
    setProduct(filterdata);
  }, [filterdata]);

  const mysorting = (products) => {
    const myfunction = products.sort((a, b) => {
      // console.log("buttonclicked");
      if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
      if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
      return 0;
    });
    dispatch(setProduct(myfunction));
  };

  // checkbox
  const handleChange = (e, id) => {
    let myArr = [...state];
    console.log("myarr", myArr);
    // console.log(myArr[id].checked)
    // console.log(!myArr[id].checked);
    myArr[id].checked = !myArr[id].checked;
    setState(myArr);
    console.log("state", state);

    if (myArr[id].name === "All" && myArr[id].checked === true) {
      const newArr = state.map((myitem) => myitem.value);

      let newArr2 = myArr.map((myitem) => {
        if (myitem.name !== "All")
          return {
            ...myitem,
            checked: false,
          };
        return myitem;
      });

      setState(newArr2);

      dispatch(filterproductbycategory(products, newArr));
    } else {
      const newARR = state
        .filter((myitem) => myitem.checked === true)
        .map((myitem) => myitem.value);

      let newARR2 = myArr.map((myitem) => {
        if (myitem.name === "All")
          return {
            ...myitem,
            checked: false,
          };

        return myitem;
      });

      setState(newARR2);

      dispatch(filterproductbycategory(products, newARR));
    }
  };

  const renderList = product?.map((value, i) => {
    const { _id, title, image, price, category } = value;

    const bull = (
      <Box
        component="span"
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
      ></Box>
    );

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
    <div>
      {state.map((data, index) => (
        <div>
          {/* {console.log("data123", data)} */}
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

      <div style={{ textAlign: "right", paddingRight: "100px" }}>
        <Button
          variant="contained"
          color="success"
          size="large"
          onClick={() => mysorting(products)}
        >
          Sort
        </Button>
      </div>

      <Grid
        container
        spacing={{ xs: 1, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
      >
        {renderList}
      </Grid>
    </div>
  );
};

export default ProductComponent;
