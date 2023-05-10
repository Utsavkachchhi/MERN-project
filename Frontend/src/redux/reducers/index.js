import { combineReducers } from "redux";
import { productReducer, selectedProductsReducer,handleCart,authReducer } from "./productsReducer";

const reducers = combineReducers ({
    allProducts : productReducer,
    product : selectedProductsReducer,
    handleCart,
    auths : authReducer
});

export default reducers;