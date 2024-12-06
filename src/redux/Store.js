import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import productReducer from "./Product_Reducer";


const rootReducer = combineReducers({
    productState :productReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;