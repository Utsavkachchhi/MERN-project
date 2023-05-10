import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
  filteredItems: [],
  filteredItemsByCategory : [],
  auths : [],

};
const cart = [];

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


// export const handleCart = (state = cart,type) => {
//   console.log(cart);
//   const product = type.payload;
//    switch (type) {
//      case ActionTypes.ADD_ITEM :
       
//      //check if product is Already exit

//      const exist = state.find((x) => x.id === product.id);
//      if(exist) {
//        //Increase the Quantity
//        return state.map((x) =>
//        x.id === product.id ? {...x, qty:x.qty+1} : x);
//      }
//      else{
//        const product = type.payload;
//        return [
//          ...state,
//          {
//            ...product,
//            qty : 1,
//          }
//        ]
//      }
//      break;

//      case ActionTypes.REMOVE_ITEM: 
//           const exist1 = state.find((x)=> x.id === product.id);
//           if(exist1.qty === 1) {
//             return state.filter((x) => x.id !== exist.id);
//           }else {
//             return state.map((x) =>
//                x.id === product.id ? {...x,qty: x.qty-1} : x
//                );
//           }
//           break;


//      default :
//      return state;
//        break;
//    }
// }

export const handleCart = (state = cart, action) => {
  const product = action.payload;

  switch (action.type) {
      case ActionTypes.ADD_ITEM:
          const exist = state.find((x) => x._id === product._id);
          console.log("payload",product);
          console.log("cart==",state);

          console.log("exist",exist);
          if (exist) {
              return state.map((x) =>
                  x._id === product._id ? { ...x, qty: x.qty + 1 } : x
              );
          } else {
              const product = action.payload;

          return [...state, { ...product, qty: 1 }];
      }

  case ActionTypes.REMOVE_ITEM:
      const exist1 = state.find((x) => x._id === product._id);
      if (exist1.qty === 1) {
          return state.filter((x) => x._id !== exist1._id);
      } else {

          return state.map((x) =>
              x._id === product._id ? { ...x, qty: x.qty - 1 } : x
          );
      }
    case ActionTypes.REMOVE_ITEM_CART:
      console.log(cart);
      const exist2 = state.find((x) => x._id === product._id);
      if (exist2) {
          return state.filter((x) => x._id !== exist2._id);
      } 
    
      

  default:
      return state;
}
};


export const filterproductreducer = (state = initialState, { type, payload }) => {

  switch(type){
    case  ActionTypes.FILTER_ITEM_BY_CATEGORY:
     
      
    
    
    
    
   
        }
};