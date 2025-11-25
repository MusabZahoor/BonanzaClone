import { createStore, combineReducers } from "redux";
import Products from "./Products.json";

const ProductReducer = (state = Products, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const initialCartState = {
  count: 0,
};

const CartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  products: ProductReducer,
  cart: CartReducer,
});

export const store = createStore(rootReducer);