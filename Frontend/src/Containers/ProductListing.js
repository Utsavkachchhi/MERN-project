import React, { useEffect } from "react";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import Product from "./Product";

const ProductListing = () => {
  return (
    <div>
      <Product />
    </div>
  );
};

export default ProductListing;
