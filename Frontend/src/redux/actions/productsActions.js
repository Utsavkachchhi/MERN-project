import { ActionTypes } from "../constants/action-types";

export const login = (auth) => {
  return {
    type : ActionTypes.LOGIN,
    payload : auth
  };
};


export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
  };
};

export const searchProduct = (search, products) => {
  return {
    type: ActionTypes.SEARCH_PRODUCTS,
    payload:
      search === ""
        ? products
        : products.filter((products) => products.category === search),
  };
};

export const addCart = (product) => {
  console.log(product);
  return {
    type: ActionTypes.ADD_ITEM,
    payload: product,
  };
};

export const delCart = (product) => {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: product,
  };
};

export const removeitemCart = (product) => {
  return {
    type: ActionTypes.REMOVE_ITEM_CART,
    payload: product,
  };
};

//  my Filter Data

export const filterproductbycategory = (products, search) => {
  let filteredData;
  if (search !== undefined) {
    filteredData = products.filter((item) => search.includes(item.category));
  } else {
    filteredData = products;
  }

  return {
    type: ActionTypes.FILTER_ITEM_BY_CATEGORY,
    payload: filteredData,
  };
};

//place order data
export const placeOrder = (items) => {
  return {
    type : ActionTypes.PLACE_ORDER,
    payload : items
  }
};