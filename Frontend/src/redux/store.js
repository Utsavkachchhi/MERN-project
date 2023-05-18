import { createStore } from "redux";
import reducers from "./reducers/index";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
const persistConfig = {
    key: 'root',
    storage,
  }
// const store = createStore(
//     reducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// const persistedReducer = persistReducer(persistConfig, reducers)
// let store = createStore(persistedReducer)
// let persistor = persistStore(store)

// export default store;
// export {persistor}
const persistedReducer = persistReducer(persistConfig, reducers);
 const store = createStore(
  persistedReducer,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
// let store = createStore(persistedReducer)
let persistor = persistStore(store)
    
export default store;

export {persistor};

