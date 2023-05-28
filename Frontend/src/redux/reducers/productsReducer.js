import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
  filteredItems: [],
  filteredItemsByCategory : [],
  auths : [],

};
const cart = [];
const order = [];

export const authReducer = (state=initialState,{type,payload}) => {
   switch(type){
    case ActionTypes.LOGIN : 
     return {...state,auths:payload};

     default:
      return state; 
   }
}


export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload, filteredItems: payload };

    case ActionTypes.SEARCH_PRODUCTS:
      return { ...state, products: payload };

      case ActionTypes.FILTER_ITEM_BY_CATEGORY:
        return { ...state, filteredItemsByCategory: payload };

    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCTS:
      return {};

    default:
      return state;
  }
};


export const handleCart = (state = cart, action) => {
  
  const product = action.payload;

  switch (action.type) {
      case ActionTypes.ADD_ITEM:
        const existingItem = state.cart.find((item) => item.product._id === product.product._id);
          if (existingItem) {
            return {
              ...state,
            cart: state.cart.map((item) =>
            item.product._id === product.product._id ? { ...item, quantity: item.quantity + 1 } : item
          ),
          }
        }
           else {
            return {
              ...state,
              cart: [...state.cart, { ...product, quantity: 1 }],
      }
    }

      case ActionTypes.SET_CART_ITEM:
        return action.payload;


 
      case ActionTypes.REMOVE_ITEM:
          const exist1 = state?.cart?.find((x) => x.product._id === product.product._id);

          if (exist1 && exist1.quantity === 1) {
            return {
              ...state,
              cart: state.cart.filter((x) => x.product._id !== exist1.product._id)
            };
          } else {
            return {
              ...state,
              cart: state.cart.map((x) =>
                x.product._id === product.product._id ? { ...x, quantity: x.quantity - 1 } : x
              )
            };
          }
    case ActionTypes.REMOVE_ITEM_CART:
      console.log(cart);
      const exist2 = state.find((x) => x._id === product._id);
      if (exist2) {
          return state.filter((x) => x._id !== exist2._id);
      } 

      case ActionTypes.CLEAR_PRODUCT_FROM_CART:
      const productId = action.payload;
      return {
        ...state,
        cart: state.cart.filter((item) => item.product._id !== productId)
      };

    
      

  default:
      return state;
}
};


export const filterproductreducer = (state = initialState, { type, payload }) => {

  switch(type){
    case  ActionTypes.FILTER_ITEM_BY_CATEGORY:
     }
};

export const handleOrder = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.PLACE_ORDER:
      const items = action.payload;
     
      return {
        ...state,
        order: items,
      };

    default:
      return state;
  }
};



